"use client";
import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

export const Initializing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 4000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="mx-auto w-2/3">
      <h1 className="mb-2 text-xl font-thin">Initializing...</h1>
      <Progress value={progress} />
    </div>
  );
};
