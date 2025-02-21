import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./cursor.css";

const Cursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const cursorSpringX = useSpring(cursorX, { stiffness: 500, damping: 10 });
  const cursorSpringY = useSpring(cursorY, { stiffness: 500, damping: 10 });

  const trailSpringX = useSpring(cursorX, { stiffness: 150, damping: 10 });
  const trailSpringY = useSpring(cursorY, { stiffness: 150, damping: 10 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const hoverElements = document.querySelectorAll("[data-cursor='hover']");
    
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHovering ? "hover" : ""}`}
        style={{ x: cursorSpringX, y: cursorSpringY }}
      />
      <motion.div
        className={`cursor-trail ${isHovering ? "hover" : ""}`}
        style={{ x: trailSpringX, y: trailSpringY }}
      />
    </>
  );
};

export default Cursor;
