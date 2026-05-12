"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-[2px] z-50 pointer-events-none">
      <div
        className="w-full bg-gradient-to-b from-primary via-primary/80 to-primary/20"
        style={{ height: `${progress}%`, transition: "height 0.08s linear" }}
      />
    </div>
  );
}
