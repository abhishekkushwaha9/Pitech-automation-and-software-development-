// src/components/RippleGrid.js
import { useRef, useEffect } from 'react';
import './RippleGrid.css';

const RippleGrid = ({
    enableRainbow = true,
    gridColor = '#a18cd1',
    rippleIntensity = 0.15,
    gridSize = 12.0,
    gridThickness = 2.5,
    fadeDistance = 2.0,
    vignetteStrength = 1.2,
    glowIntensity = 0.3,
    opacity = 0.8,
    gridRotation = 0,
    mouseInteraction = true,
    mouseInteractionRadius = 1.5,
    waveSpeed = 2,
    colorShiftSpeed = 0.5
}) => {
    const canvasRef = useRef(null);
    const mousePositionRef = useRef({ x: 0.5, y: 0.5 });
    const mouseVelocityRef = useRef({ x: 0, y: 0 });
    const lastMousePosRef = useRef({ x: 0.5, y: 0.5 });
    const timeRef = useRef(0);
    const animationFrameRef = useRef(null);
    const pointsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Initialize grid points
        const initPoints = () => {
            const points = [];
            const cols = 30;
            const rows = 20;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    points.push({
                        x: (i / (cols - 1)) * 2 - 1,
                        y: (j / (rows - 1)) * 2 - 1,
                        baseX: (i / (cols - 1)) * 2 - 1,
                        baseY: (j / (rows - 1)) * 2 - 1,
                        offset: Math.random() * Math.PI * 2,
                        wave: 0
                    });
                }
            }
            pointsRef.current = points;
        };

        initPoints();

        const handleMouseMove = (e) => {
            if (!mouseInteraction) return;

            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            // Calculate mouse velocity for more dynamic effects
            const dx = x - lastMousePosRef.current.x;
            const dy = y - lastMousePosRef.current.y;
            mouseVelocityRef.current = {
                x: dx * 10,
                y: dy * 10
            };

            mousePositionRef.current = {
                x: Math.max(0, Math.min(1, x)),
                y: Math.max(0, Math.min(1, y))
            };

            lastMousePosRef.current = { x, y };
        };

        const handleMouseLeave = () => {
            mouseVelocityRef.current = { x: 0, y: 0 };
        };

        const handleResize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;

            // Recalculate grid points based on new dimensions
            initPoints();
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);
        handleResize();

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;

            // Convert mouse position to canvas coordinates
            const mouseX = mousePositionRef.current.x * width;
            const mouseY = mousePositionRef.current.y * height;

            // Update time for animations
            timeRef.current += 0.01;

            // Calculate rotation
            const rot = (gridRotation * Math.PI) / 180;
            const cosRot = Math.cos(rot);
            const sinRot = Math.sin(rot);

            // Update wave effects for all points
            const updatedPoints = pointsRef.current.map(point => {
                // Calculate distance from mouse
                const screenX = centerX + (point.baseX * cosRot - point.baseY * sinRot) * width * 0.4;
                const screenY = centerY + (point.baseX * sinRot + point.baseY * cosRot) * height * 0.4;

                const dx = (screenX - mouseX) / width;
                const dy = (screenY - mouseY) / height;
                const distToMouse = Math.sqrt(dx * dx + dy * dy) * 2;

                // Mouse influence with velocity
                const mouseInfluence = mouseInteraction ?
                    Math.max(0, 1 - distToMouse * mouseInteractionRadius) : 0;

                // Calculate wave effect
                const wave1 = Math.sin(timeRef.current * waveSpeed + point.offset) * rippleIntensity;
                const wave2 = Math.cos(timeRef.current * 1.3 + point.offset * 2) * rippleIntensity * 0.5;
                const mouseWave = mouseInfluence * Math.sin(timeRef.current * 8 + distToMouse * 10) * rippleIntensity * 2;

                // Add mouse velocity influence
                const velocityInfluence = (mouseVelocityRef.current.x * dx + mouseVelocityRef.current.y * dy) * 0.5;

                // Combine all waves
                const totalWave = wave1 + wave2 + mouseWave + velocityInfluence;

                // Calculate new position with wave offset

                return {
                    ...point,
                    wave: totalWave,
                    screenX,
                    screenY
                };
            });

            // Draw connections first (grid lines)
            ctx.lineWidth = gridThickness * 0.3;

            // Group points by rows and columns
            const cols = 30;
            const rows = 20;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const index = i * rows + j;
                    const point = updatedPoints[index];

                    if (!point) continue;

                    // Calculate screen position with wave
                    const baseScreenX = centerX + (point.baseX * cosRot - point.baseY * sinRot) * width * 0.4;
                    const baseScreenY = centerY + (point.baseX * sinRot + point.baseY * cosRot) * height * 0.4;

                    const screenX = baseScreenX + point.wave * 30;
                    const screenY = baseScreenY + point.wave * 30;

                    // Calculate distance from center for fade effect
                    const distFromCenter = Math.sqrt(
                        Math.pow((screenX - centerX) / (width * 0.5), 2) +
                        Math.pow((screenY - centerY) / (height * 0.5), 2)
                    );

                    // Calculate alpha
                    let alpha = opacity * (1 - distFromCenter * fadeDistance * 0.5);

                    if (alpha <= 0.01) continue;

                    // Calculate color based on rainbow or grid color
                    let r, g, b;

                    if (enableRainbow) {
                        // Rainbow effect based on position, time, and mouse influence
                        const mouseXNorm = mousePositionRef.current.x;
                        const mouseYNorm = mousePositionRef.current.y;

                        // Calculate distance from mouse for color influence
                        const dx = (screenX - mouseX) / width;
                        const dy = (screenY - mouseY) / height;
                        const distToMouse = Math.sqrt(dx * dx + dy * dy);

                        // Hue shifts with time and mouse position
                        const baseHue = (timeRef.current * colorShiftSpeed +
                            point.baseX * 0.5 +
                            point.baseY * 0.3 +
                            mouseXNorm * 0.2 +
                            mouseYNorm * 0.2) % 1;

                        // Add mouse distance influence to hue
                        const mouseHueInfluence = Math.max(0, 1 - distToMouse) * 0.3;
                        const hue = (baseHue + mouseHueInfluence) % 1;

                        // Dynamic saturation and lightness
                        const saturation = 0.8 + Math.sin(timeRef.current * 2 + distToMouse * 5) * 0.2;
                        const lightness = 0.5 + Math.sin(timeRef.current * 3 + point.offset) * 0.2;

                        const rgb = hslToRgb(hue, saturation, lightness);
                        r = rgb[0];
                        g = rgb[1];
                        b = rgb[2];
                    } else {
                        const rgb = hexToRgb(gridColor);
                        r = rgb[0];
                        g = rgb[1];
                        b = rgb[2];
                    }

                    // Draw horizontal connections
                    if (i < cols - 1) {
                        const nextIndex = (i + 1) * rows + j;
                        const nextPoint = updatedPoints[nextIndex];

                        if (nextPoint) {
                            const nextBaseScreenX = centerX + (nextPoint.baseX * cosRot - nextPoint.baseY * sinRot) * width * 0.4;
                            const nextBaseScreenY = centerY + (nextPoint.baseX * sinRot + nextPoint.baseY * cosRot) * height * 0.4;

                            const nextScreenX = nextBaseScreenX + nextPoint.wave * 30;
                            const nextScreenY = nextBaseScreenY + nextPoint.wave * 30;

                            ctx.beginPath();
                            ctx.moveTo(screenX, screenY);
                            ctx.lineTo(nextScreenX, nextScreenY);

                            // Gradient stroke for lines
                            const gradient = ctx.createLinearGradient(screenX, screenY, nextScreenX, nextScreenY);
                            gradient.addColorStop(0, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha * 0.4})`);
                            gradient.addColorStop(1, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha * 0.2})`);

                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = gridThickness * 0.3 * (1 + point.wave);
                            ctx.stroke();
                        }
                    }

                    // Draw vertical connections
                    if (j < rows - 1) {
                        const nextIndex = i * rows + (j + 1);
                        const nextPoint = updatedPoints[nextIndex];

                        if (nextPoint) {
                            const nextBaseScreenX = centerX + (nextPoint.baseX * cosRot - nextPoint.baseY * sinRot) * width * 0.4;
                            const nextBaseScreenY = centerY + (nextPoint.baseX * sinRot + nextPoint.baseY * cosRot) * height * 0.4;

                            const nextScreenX = nextBaseScreenX + nextPoint.wave * 30;
                            const nextScreenY = nextBaseScreenY + nextPoint.wave * 30;

                            ctx.beginPath();
                            ctx.moveTo(screenX, screenY);
                            ctx.lineTo(nextScreenX, nextScreenY);

                            const gradient = ctx.createLinearGradient(screenX, screenY, nextScreenX, nextScreenY);
                            gradient.addColorStop(0, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha * 0.4})`);
                            gradient.addColorStop(1, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha * 0.2})`);

                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = gridThickness * 0.3 * (1 + point.wave);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Draw points on top
            updatedPoints.forEach(point => {
                const baseScreenX = centerX + (point.baseX * cosRot - point.baseY * sinRot) * width * 0.4;
                const baseScreenY = centerY + (point.baseX * sinRot + point.baseY * cosRot) * height * 0.4;

                const screenX = baseScreenX + point.wave * 30;
                const screenY = baseScreenY + point.wave * 30;

                // Calculate distance from mouse for glow effect
                const dx = (screenX - mouseX) / width;
                const dy = (screenY - mouseY) / height;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);
                const mouseGlow = mouseInteraction ? Math.max(0, 1 - distToMouse * 2) : 0;

                // Calculate distance from center
                const distFromCenter = Math.sqrt(
                    Math.pow((screenX - centerX) / (width * 0.5), 2) +
                    Math.pow((screenY - centerY) / (height * 0.5), 2)
                );

                let alpha = opacity * (1 - distFromCenter * fadeDistance * 0.5);

                if (alpha <= 0.01) return;

                // Calculate color for point
                let r, g, b;

                if (enableRainbow) {
                    const mouseXNorm = mousePositionRef.current.x;
                    const mouseYNorm = mousePositionRef.current.y;

                    const baseHue = (timeRef.current * colorShiftSpeed +
                        point.baseX * 0.5 +
                        point.baseY * 0.3 +
                        mouseXNorm * 0.2 +
                        mouseYNorm * 0.2) % 1;

                    const mouseHueInfluence = mouseGlow * 0.3;
                    const hue = (baseHue + mouseHueInfluence) % 1;

                    const saturation = 0.9 + mouseGlow * 0.1;
                    const lightness = 0.6 + mouseGlow * 0.2 + Math.sin(timeRef.current * 3 + point.offset) * 0.1;

                    const rgb = hslToRgb(hue, saturation, lightness);
                    r = rgb[0];
                    g = rgb[1];
                    b = rgb[2];
                } else {
                    const rgb = hexToRgb(gridColor);
                    r = rgb[0];
                    g = rgb[1];
                    b = rgb[2];
                }

                // Add glow for points near mouse
                const glowSize = mouseGlow * 10;

                // Draw outer glow
                if (mouseGlow > 0) {
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, gridThickness * (2 + glowSize), 0, Math.PI * 2);
                    const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, gridThickness * 4);
                    gradient.addColorStop(0, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha * mouseGlow * 0.5})`);
                    gradient.addColorStop(1, `rgba(${r * 255}, ${g * 255}, ${b * 255}, 0)`);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }

                // Draw main point
                ctx.beginPath();
                ctx.arc(screenX, screenY, gridThickness * (0.8 + Math.abs(point.wave) * 2), 0, Math.PI * 2);

                // Add sparkle effect
                if (mouseGlow > 0.5) {
                    const sparkle = Math.sin(timeRef.current * 20 + point.offset) * 0.5 + 0.5;
                    ctx.fillStyle = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha * (1 + sparkle * 0.3)})`;
                } else {
                    ctx.fillStyle = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha})`;
                }

                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(drawGrid);
        };

        // Helper function to convert hex to RGB
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? [
                    parseInt(result[1], 16) / 255,
                    parseInt(result[2], 16) / 255,
                    parseInt(result[3], 16) / 255
                ]
                : [1, 1, 1];
        };

        // Helper function to convert HSL to RGB
        const hslToRgb = (h, s, l) => {
            let r, g, b;

            if (s === 0) {
                r = g = b = l;
            } else {
                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;

                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return [r, g, b];
        };

        drawGrid();

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [enableRainbow, gridColor, rippleIntensity, gridSize, gridThickness,
        fadeDistance, vignetteStrength, glowIntensity, opacity, gridRotation,
        mouseInteraction, mouseInteractionRadius, waveSpeed, colorShiftSpeed]);

    return (
        <canvas
            ref={canvasRef}
            className={`ripple-grid-canvas ${mouseInteraction ? 'ripple-grid-canvas-interactive' : 'ripple-grid-canvas-static'}`}
        />
    );
};

export default RippleGrid;