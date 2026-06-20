'use client';

import { useState, useEffect, useRef } from "react";

export const CursorFollower = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Use event delegation to handle dynamically loaded elements and page route changes.
    // This ensures that hover effects work on every page.
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, img, input, textarea, select, [role='button'], [data-interactive]");
      setIsHovering(!!interactive);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      });

      requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Small follow dot */}
      <div
        className="absolute rounded-full dark:bg-white bg-navy"
        style={{
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />

      {/* Outer follow border */}
      <div
        className="absolute rounded-full border dark:border-white border-navy"
        style={{
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </div>
  );
};

// Export Component as alias to support original references
export const Component = CursorFollower;
export default CursorFollower;
