import React, { useRef, useEffect, useState } from 'react';
import type { Character } from '../constants';

interface CharacterCardProps {
    character: Character;
    scrollX: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, scrollX }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (cardRef.current) {
            const cardLeft = cardRef.current.getBoundingClientRect().left;
            const screenCenter = window.innerWidth / 2;
            const distanceFromCenter = cardLeft + (cardRef.current.offsetWidth / 2) - screenCenter;
            
            // Apply a more pronounced rotation when closer to the center
            const newRotation = (distanceFromCenter / screenCenter) * -45; // Max rotation of 45 degrees
            
            setRotation(newRotation);
        }
    }, [scrollX]);

    return (
        <div 
            ref={cardRef} 
            className="flex-shrink-0 w-[80vw] md:w-[600px] h-auto p-12"
            style={{ perspective: '1500px' }}
        >
            <div
                className="w-full h-full bg-neutral-800 transition-transform duration-300 ease-out border-4 border-black"
                style={{
                    transform: `rotateY(${rotation}deg) scale(0.9)`,
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="relative w-full h-full">
                    {character.videoUrl ? (
                        <video 
                            src={character.videoUrl} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            poster={character.imageUrl}
                            className="w-full h-[400px] object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={character.imageUrl} alt={character.name} className="w-full h-[400px] object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="p-6 absolute bottom-0 left-0 right-0">
                        <span className="bg-red-600 text-white font-bold px-3 py-1 text-sm">{character.style}</span>
                        <h3 className="text-5xl font-bangers mt-2 text-white" style={{WebkitTextStroke: '1px black'}}>{character.name}</h3>
                        <p className="mt-2 text-neutral-300">{character.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};