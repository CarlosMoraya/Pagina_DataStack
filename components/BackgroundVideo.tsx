import React from 'react';

const BackgroundVideo: React.FC = () => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-brand-950">
            {/* Cinematic Overlay - Ajustei para 70% de opacidade para realçar o texto branco na frente */}
            <div className="absolute inset-0 bg-brand-950/70 z-10" />

            <video
                key="hero-video-final-v2"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                <source src="/videos/hero-video-final.mp4?v=v2" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </div>
    );
};

export default BackgroundVideo;
