import React from 'react';
import { ComicText } from './ComicText';

interface AnnouncementModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="bg-yellow-400 text-black border-4 border-black p-8 max-w-lg w-full relative transform transition-all duration-300 animate-modal-pop-in"
                onClick={(e) => e.stopPropagation()}
                style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-red-600 text-white font-bangers text-2xl w-12 h-12 rounded-full border-4 border-black flex items-center justify-center transform hover:scale-110 transition-transform active:scale-100"
                    aria-label="Tutup modal"
                >
                    X
                </button>
                
                <ComicText text="PENGUMUMAN!" className="text-4xl md:text-5xl !text-red-600" />
                
                <div className="mt-6">
                    <h3 id="modal-title" className="font-bangers text-3xl text-neutral-900">Demo Dibuka 3 Juli!</h3>
                    <p className="mt-2 text-lg font-bold">
                        Para developer kami sedang berjuang keras... melawan ujian! 
                    </p>
                    <p className="mt-2">
                        Karena itu, demo game 'Langit Baru' baru akan bisa diunduh mulai tanggal <strong className="underline">3 Juli</strong>. Kami mohon maaf atas penundaannya dan terima kasih banyak atas kesabaran dan dukungan kalian!
                    </p>
                </div>

            </div>
        </div>
    );
};
