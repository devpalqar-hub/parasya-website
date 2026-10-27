"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 0.8,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-10%" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
