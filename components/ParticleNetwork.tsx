import React, { useRef, useEffect } from 'react';

const ParticleNetwork: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            init();
        };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        const init = () => {
            if (!canvas) return;
            particlesArray = [];
            const numberOfParticles = Math.floor((canvas.height * canvas.width) / 12000); // Tune denisty here
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 1.5 + 0.5;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const directionX = (Math.random() * 1) - 0.5;
                const directionY = (Math.random() * 1) - 0.5;
                const color = '#ffffff';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        };

        const connect = () => {
            if (!canvas || !ctx) return;
            let opacityValue = 1;
            const connectionDistance = 15000; // max distance squared

            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distanceSquared = dx * dx + dy * dy;

                    if (distanceSquared < connectionDistance) {
                        opacityValue = 1 - distanceSquared / connectionDistance;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.4})`; // 0.4 is max lines opacity
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!canvas || !ctx) return;
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-40"
            style={{ display: 'block', backgroundColor: 'transparent', pointerEvents: 'none' }}
        />
    );
};

export default ParticleNetwork;
