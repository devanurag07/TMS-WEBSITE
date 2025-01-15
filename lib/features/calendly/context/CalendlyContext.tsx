"use client"
import React, { createContext, useContext, useState } from 'react';

type CalendlyContextType = {
    isOpen: boolean;
    openCalendly: () => void;
    closeCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openCalendly = () => setIsOpen(true);
    const closeCalendly = () => setIsOpen(false);

    return (
        <CalendlyContext.Provider value={{ isOpen, openCalendly, closeCalendly }}>
            {children}
        </CalendlyContext.Provider>
    );
}

export function useCalendly() {
    const context = useContext(CalendlyContext);
    if (context === undefined) {
        throw new Error('useCalendly must be used within a CalendlyProvider');
    }
    return context;
} 