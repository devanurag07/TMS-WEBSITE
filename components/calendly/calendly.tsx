"use client"
import React, { useEffect } from 'react';

export const Calendly = ({ minWidth, height, url }: { minWidth: string, height: string, url: string }) => {
    useEffect(() => {
        const head = document.querySelector('head');
        if (!head) return;

        const script = document.createElement('script');
        script.setAttribute(
            'src',
            'https://assets.calendly.com/assets/external/widget.js'
        );
        head.appendChild(script);
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minWidth, height }}
        />
    );
};