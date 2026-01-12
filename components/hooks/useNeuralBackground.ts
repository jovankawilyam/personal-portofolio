import { useEffect } from "react";

export function useNeuralBackground(): void {
  useEffect(() => {
    // ⛔ Jangan jalan di server
    if (typeof window === "undefined") return;

    const canvas = document.getElementById(
      "neural-bg"
    ) as HTMLCanvasElement | null;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: NeuralNode[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class NeuralNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 3 + 1;
      }

      update(): void {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }

      draw(): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffff";
        ctx.fill();
      }
    }

    const init = (): void => {
      nodes = Array.from({ length: 100 }, () => new NeuralNode());
    };

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });
      animationId = window.requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}
