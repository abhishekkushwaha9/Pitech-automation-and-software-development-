import React, { useEffect, useState, useRef } from "react";

/**
 * WordRevealText
 * Animates text word-by-word with staggered 3D perspective slide-up when scrolled into view.
 */
export default function WordRevealText({ text, delay = 0, stagger = 140, className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const words = text.split(" ");

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <span
            ref={containerRef}
            className={`word-reveal-container ${className}`}
            style={{ display: "inline-block", perspective: "800px" }}
            aria-label={text}
        >
            {words.map((word, idx) => (
                <span
                    key={idx}
                    style={{
                        display: "inline-block",
                        marginRight: idx < words.length - 1 ? "0.28em" : "0",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0) rotateX(0deg)" : "translateY(28px) rotateX(35deg)",
                        filter: isVisible ? "blur(0)" : "blur(4px)",
                        transition: `all 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * stagger}ms`,
                        willChange: "transform, opacity, filter"
                    }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
}
