import React, { useState, useEffect } from "react";

const ThreeDMousePointer = ({ children, maxRotation = 90, transition = 0.1 }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * maxRotation; // rotateY
            const y = (e.clientY / window.innerHeight - 0.5) * maxRotation; // rotateX
            setRotation({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [maxRotation]);

    return (
        <div
            style={{
                transform: `rotateY(${rotation.x}deg) rotateX(${-rotation.y}deg)`,
                transformStyle: "preserve-3d",
                transition: `transform ${transition}s`,
                perspective: "1000px",
                display: "inline-block",
            }}
        >
            {children}
        </div>
    );
};

export default ThreeDMousePointer;
