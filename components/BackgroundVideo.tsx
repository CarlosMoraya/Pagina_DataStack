import React from 'react';

const BackgroundVideo: React.FC = () => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-brand-950">
            {/* Cinematic Overlay - Ajuste a opacidade conforme necessário para legibilidade */}
            <div className="absolute inset-0 bg-brand-950/50 z-10" />

            <video
                key="hero-video-final"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                <source src="/videos/hero-video-final.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </div>
    );
};

export default BackgroundVideo;
