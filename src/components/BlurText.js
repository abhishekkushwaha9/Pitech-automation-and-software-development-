// src/components/BlurText.js
import React, { useEffect, useRef, useState } from 'react';
import './BlurText.css';

const BlurText = ({
    text = '',
    animateBy = 'words',
    direction = 'top',
    delay = 100,
    stepDuration = 0.3,
    threshold = 0.1,
    rootMargin = '0px',
    onAnimationComplete = () => { },
    className = '',
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    useEffect(() => {
        if (isVisible && !animationDone) {
            const totalDelay = (animateBy === 'words'
                ? text.split(' ').length
                : text.length) * (delay / 1000) + stepDuration;

            const timer = setTimeout(() => {
                setAnimationDone(true);
                onAnimationComplete();
            }, totalDelay * 1000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, animationDone, text, animateBy, delay, stepDuration, onAnimationComplete]);

    const elements = animateBy === 'words'
        ? text.split(' ').map((word, i) => ({ content: word, key: i }))
        : text.split('').map((letter, i) => ({ content: letter, key: i }));

    const getAnimationStyle = (index) => {
        if (!isVisible) {
            return {
                opacity: 0,
                filter: 'blur(10px)',
                transform: direction === 'top' ? 'translateY(-30px)' : 'translateY(30px)',
                transition: 'none'
            };
        }

        const animationDelay = index * (delay / 1000);

        return {
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'translateY(0)',
            transition: `all ${stepDuration}s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelay}s`
        };
    };

    return (
        <span ref={elementRef} className={`blur-text ${className}`} {...props}>
            {elements.map((item, index) => (
                <span
                    key={item.key}
                    className={animateBy === 'words' ? 'blur-text-word' : 'blur-text-char'}
                    style={getAnimationStyle(index)}
                >
                    {item.content}
                    {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
                </span>
            ))}
        </span>
    );
};

export default BlurText;