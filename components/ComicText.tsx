import React from 'react';

interface ComicTextProps {
    text: string;
    className?: string;
}

export const ComicText: React.FC<ComicTextProps> = ({ text, className }) => {
    return (
        <div 
            className={`font-bangers text-yellow-400 tracking-wider inline-block transform -rotate-6 ${className}`}
            style={{
                WebkitTextStroke: '2px #000',
                textShadow: '6px 6px 0px rgba(0,0,0,0.4)'
            }}
        >
            {text}
        </div>
    );
};
