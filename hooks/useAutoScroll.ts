import { useEffect, useRef, useState } from 'react';

export const useAutoScroll = (scrollSpeed = 1, pauseOnHover = true) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let currentScroll = 0;

        const scroll = () => {
            if (!isPaused) {
                currentScroll += scrollSpeed;
                if (currentScroll >= scrollContainer.scrollHeight / 2) {
                    currentScroll = 0;
                }
                scrollContainer.scrollTop = currentScroll;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [scrollSpeed, isPaused]);

    const containerProps = {
        ref: scrollRef,
        onMouseEnter: () => pauseOnHover && setIsPaused(true),
        onMouseLeave: () => pauseOnHover && setIsPaused(false),
    };

    return containerProps;
}; 