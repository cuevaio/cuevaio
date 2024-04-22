"use client";

import * as React from "react";

const Noise = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = React.useState<{
    width: number;
    height: number;
  }>();
  React.useEffect(() => {
    setCanvasSize({
      width: window.innerWidth || 1920,
      height: window.innerHeight || 1080,
    });
  }, []);

  const noise = React.useCallback((ctx: CanvasRenderingContext2D) => {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    const iData = ctx.createImageData(w, h);
    const buffer32 = new Uint32Array(iData.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.75) buffer32[i] = 0xf3f2feff;
    }

    ctx.putImageData(iData, 0, 0);
  }, []);

  const tick = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    noise(ctx);
    requestAnimationFrame(tick);
  }, [noise]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!canvasSize) return;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    window.addEventListener("resize", handleResize);
    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasSize, tick]);

  return <canvas ref={canvasRef} className="-noise" />;
};

export default Noise;
