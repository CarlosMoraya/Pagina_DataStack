import { BlogPost } from '../../types';

/**
 * Fetches blog posts from a published Google Sheet CSV.
 * The sheet must be published to the web as CSV: 
 * File -> Share -> Publish to web -> Link -> CSV
 */
/**
 * Converts Google Drive sharing links to direct image URLs.
 */
function formatImageUrl(url: string): string {
    if (!url) return '';
    const trimmedUrl = url.trim();

    // Google Drive Link conversion
    if (trimmedUrl.includes('drive.google.com')) {
        const fileIdMatch = trimmedUrl.match(/\/d\/([^/]+)/) || trimmedUrl.match(/id=([^&]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
            // thumbnail format is often more reliable for direct embedding
            return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1200`;
        }
    }
    return trimmedUrl;
}

export async function fetchBlogPosts(sheetUrl: string): Promise<BlogPost[]> {
    try {
        const separatorChar = sheetUrl.includes('?') ? '&' : '?';
        const cacheBuster = `${separatorChar}t=${new Date().getTime()}`;

        const response = await fetch(sheetUrl + cacheBuster, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });

        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        const text = await response.text();

        // 1. Detect separator
        const headerCandidate = text.split('\n')[0];
        const sep = (headerCandidate.match(/;/g) || []).length > (headerCandidate.match(/,/g) || []).length ? ';' : ',';

        // 2. High-reliability State Machine Parser
        const rows: string[][] = [];
        let currentRow: string[] = [];
        let currentField = '';
        let inQuotes = false;
        const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        for (let i = 0; i < normalizedText.length; i++) {
            const char = normalizedText[i];
            const nextChar = normalizedText[i + 1];

            if (inQuotes) {
                if (char === '"' && nextChar === '"') {
                    currentField += '"';
                    i++;
                } else if (char === '"') {
                    inQuotes = false;
                } else {
                    currentField += char;
                }
            } else {
                if (char === '"') {
                    inQuotes = true;
                } else if (char === sep) {
                    currentRow.push(currentField);
                    currentField = '';
                } else if (char === '\n') {
                    currentRow.push(currentField);
                    rows.push(currentRow);
                    currentRow = [];
                    currentField = '';
                } else {
                    currentField += char;
                }
            }
        }
        if (currentRow.length > 0 || currentField.trim() !== '') {
            currentRow.push(currentField);
            rows.push(currentRow);
        }

        if (rows.length < 2) return [];

        const rawHeaders = rows[0].map(h => h.trim().replace(/^\ufeff/, '').toLowerCase().replace(/\s/g, ''));
        const headers = rawHeaders.map(h => {
            if (h === 'imageurl') return 'imageUrl';
            if (h === 'readtime') return 'readTime';
            return h;
        });

        const dataRows = rows.slice(1);
        return dataRows.map(row => {
            const post: any = {};
            headers.forEach((key, index) => {
                let value = (row[index] || '').trim().replace(/^'/, '');
                if (key === 'imageUrl') value = formatImageUrl(value);
                post[key] = value;
            });
            return post as BlogPost;
        }).filter(p => p.id && (p.title || p.content));
    } catch (error) {
        console.error('FetchBlogPosts error:', error);
        return [];
    }
}
