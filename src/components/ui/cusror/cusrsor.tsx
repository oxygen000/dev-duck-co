import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./cursor.css";

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot") as HTMLDivElement;
    const cursorTrail = document.querySelector(".cursor-trail") as HTMLDivElement;

    if (!cursorDot || !cursorTrail) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.3 });
      gsap.to(cursorTrail, { x: e.clientX, y: e.clientY, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-trail"></div>
    </>
  );
};

export default Cursor;
