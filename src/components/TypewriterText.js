import React, { useEffect, useState, useRef } from "react";
import "./TypewriterText.css";

// Preserves exact heading font, weight and color while typing letter by letter on scroll
export default function TypewriterText({ text, speed = 40, delay = 0 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTriggered, setIsTriggered] = useState(false);
    const [isActivelyTyping, setIsActivelyTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isTriggered && !isComplete) {
                    setIsTriggered(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [isTriggered, isComplete]);

    useEffect(() => {
        if (!isTriggered || isComplete) return;
        let index = 0;
        let timer;
        const delayTimer = setTimeout(() => {
            setIsActivelyTyping(true);
            timer = setInterval(() => {
                index++;
                setDisplayedText(text.slice(0, index));
                if (index >= text.length) {
                    clearInterval(timer);
                    setIsComplete(true);
                    setIsActivelyTyping(false);
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(delayTimer);
            if (timer) clearInterval(timer);
        };
    }, [isTriggered, text, speed, delay, isComplete]);

    return (
        <span ref={textRef} className="typewriter-text-wrapper" aria-label={text}>
            {displayedText ? (
                <span>{displayedText}</span>
            ) : (
                <span style={{ visibility: "hidden", pointerEvents: "none" }}>{text[0] || "\u00A0"}</span>
            )}
            {isActivelyTyping && <span className="typewriter-text-cursor">|</span>}
        </span>
    );
}
