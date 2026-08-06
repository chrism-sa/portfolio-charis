// src/components/ThreeBackground.tsx
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 300; // Sesuaikan jumlah bintang di sini

    // Posisi dan jangkauan tolakan kursor
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120 // Ukuran ruang kosong di sekitar kursor
    };

    // Deteksi pergerakan mouse
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Reset saat mouse keluar dari layar
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Responsif saat ukuran layar diubah
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 0.5; // Ukuran bintang
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1; // Kecepatan menghindar
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Warna bintang
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          // Jika kursor mendekat, bintang terdorong
          if (distance < maxDistance) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            // Jika aman, perlahan kembali ke posisi awal
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 10;
            }
          }
        } else {
          // Jika kursor tidak ada, kembalikan semua bintang ke posisi awal
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function animate() {
      if (!ctx) return;
      // Gunakan clearRect agar background CSS tetap terlihat di belakang canvas
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('mouseout', () => {});
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Memastikan canvas menutupi layar penuh dan tidak menghalangi klik (pointer-events-none)
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}