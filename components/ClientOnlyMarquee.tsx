"use client";

import { useState, useEffect } from "react";
import { MarqueeDemo } from "./MarqueeDemo";

export function ClientOnlyMarquee() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-32 bg-gray-50 rounded-xl">
                <div className="text-gray-400">Loading...</div>
            </div>
        );
    }

    return <MarqueeDemo />;
}
