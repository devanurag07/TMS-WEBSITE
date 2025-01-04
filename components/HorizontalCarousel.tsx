import React, { useState, useEffect, useCallback } from 'react';

interface HorizontalCarouselProps {
    children: React.ReactNode[];  // Note: Expecting an array of children
    className?: string;
    autoPlayInterval?: number; // Time in milliseconds between slides
    color?: string;
}

export const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
    children,
    className = '',
    autoPlayInterval = 3000, // Default to 3 seconds
    color = 'white'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((current) =>
            current === children.length - 1 ? 0 : current + 1
        );
    }, [children.length]);

    // Auto-play effect
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [isPaused, nextSlide, autoPlayInterval]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children.map((child, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-5">
                {children.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === index
                            ? `bg-${color} w-4`
                            : 'bg-gray-300'
                            }`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}; 