// src/components/StarBorder.js
import React from 'react';
import './StarBorder.css';

const StarBorder = ({
    as: Component = 'button',
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}) => {
    return (
        <Component
            className={`star-border-container ${className}`}
            style={{
                '--star-color': color,
                '--star-speed': speed,
                '--star-thickness': thickness,
                ...rest.style
            }}
            {...rest}
        >
            <div className="star-border-wrapper">
                <div className="star-glow glow-1"></div>
                <div className="star-glow glow-2"></div>
                <div className="star-glow glow-3"></div>
                <div className="star-glow glow-4"></div>
                <div className="star-border-top"></div>
                <div className="star-border-bottom"></div>
                <div className="star-border-left"></div>
                <div className="star-border-right"></div>
                <div className="star-corner corner-tl"></div>
                <div className="star-corner corner-tr"></div>
                <div className="star-corner corner-bl"></div>
                <div className="star-corner corner-br"></div>
                <div className="star-particle particle-1"></div>
                <div className="star-particle particle-2"></div>
                <div className="star-particle particle-3"></div>
                <div className="star-particle particle-4"></div>
                <div className="star-particle particle-5"></div>
                <div className="star-particle particle-6"></div>
                <div className="star-particle particle-7"></div>
                <div className="star-particle particle-8"></div>
            </div>
            <div className="inner-content">{children}</div>
        </Component>
    );
};

export default StarBorder;