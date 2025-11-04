import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { characters, gameFeatures } from './constants';
import { CharacterCard } from './components/CharacterCard';
import { ComicText } from './components/ComicText';

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bangers text-red-500 tracking-wider">Langit Baru</h1>
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#hero" className="font-bold hover:text-yellow-400 transition-colors">BERANDA</a>
        <a href="#characters" className="font-bold hover:text-yellow-400 transition-colors">KARAKTER</a>
        <a href="#features" className="font-bold hover:text-yellow-400 transition-colors">FITUR</a>
        <a
          href="https://drive.google.com/drive/folders/15x1BYmXuN1MDZj8H18qIqjfy6n_y6rad?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white font-bangers text-xl px-6 py-1 rounded-sm border-2 border-black hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105"
        >
          MAINKAN SEKARANG
        </a>
      </nav>
    </div>
  </header>
);

const HeroSection: React.FC = () => {
    return (
      <section id="hero" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute z-0 w-full h-full object-cover"
        >
            <source src="https://res.cloudinary.com/dj0draukr/video/upload/v1761913586/Salinan_dari_Cpt_Pulang_ya_kak_enauk3.mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
        </video>
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>

        <div className="relative z-20 text-center px-4">
            <ComicText text="Stop Bullying!" className="text-5xl md:text-8xl mb-8" />
            <h2 className="font-bangers text-7xl md:text-9xl lg:text-[150px] text-white tracking-wider" style={{ WebkitTextStroke: '4px black' }}>
                PEDULI SEKITARMU
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg">setiap aksi berarti, bertindaklah dengan tepat sebelum terlambat.</p>
        </div>
      </section>
    );
};

const ShuffleSection: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} id="characters" className="container mx-auto py-24 px-4 relative">
            <h2 className="text-6xl font-bangers text-center mb-12 text-yellow-400">PILIH JAGOANMU</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {characters.map((char, index) => (
                    <div
                        key={char.name}
                        className="transition-all duration-1000 ease-out"
                        style={{
                            transform: inView ? 'translateY(0) rotate(0)' : `translateY(100px) rotate(${ (index % 2 === 0 ? -1 : 1) * (10 - index * 2)}deg)`,
                            opacity: inView ? 1 : 0,
                            transitionDelay: `${index * 150}ms`
                        }}
                    >
                        <div className="bg-neutral-800 border-4 border-black p-4 h-full group perspective-1000">
                             <div className="relative overflow-hidden preserve-3d group-hover:rotate-y-180 duration-1000">
                                <img src={char.imageUrl} alt={char.name} className="w-full h-80 object-cover backface-hidden" />
                                <div className="absolute inset-0 bg-red-600 p-4 rotate-y-180 backface-hidden flex flex-col justify-center">
                                    <h4 className="text-xl font-bold">{char.style}</h4>
                                    <p className="mt-2 text-sm">{char.description}</p>
                                </div>
                             </div>
                            <h3 className="text-3xl font-bangers mt-4 text-yellow-400">{char.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
             <ComicText text="PILIH!" className="text-5xl absolute -bottom-10 -right-10" />
        </section>
    );
};

const HorizontalScrollSection: React.FC = () => {
    const horizontalContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (horizontalContainerRef.current && contentRef.current) {
                const { top, height } = horizontalContainerRef.current.getBoundingClientRect();
                const contentWidth = contentRef.current.scrollWidth;
                const windowWidth = window.innerWidth;

                if (top <= 0 && top > -(height - window.innerHeight)) {
                    const scrollableDistance = contentWidth - windowWidth;
                    const scrollProgress = -top / (height - window.innerHeight);
                    setTransform(Math.min(0, -scrollProgress * scrollableDistance));
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerHeight = () => {
        if(contentRef.current) {
            return contentRef.current.scrollWidth * 1.5;
        }
        return 3000;
    }

    return (
        <section id="features" ref={horizontalContainerRef} className="relative" style={{ height: `${containerHeight()}px` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                <div 
                    className="absolute top-0 left-0 h-full flex items-center"
                    ref={contentRef}
                    style={{ transform: `translateX(${transform}px)` }}
                >
                    <div className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center text-center px-12">
                         <h2 className="text-8xl font-bangers text-white" style={{WebkitTextStroke: '2px #e53e3e'}}>FITUR GAME</h2>
                         <p className="text-xl">Rasakan Pengalaman Bertarung yang Satisfiying</p>
                         <div className="mt-8 text-3xl font-bangers text-yellow-400 animate-pulse">Geser Kanan &rarr;</div>
                    </div>
                    {gameFeatures.map((feature, index) => (
                        <CharacterCard 
                            key={index} 
                            character={feature}
                            scrollX={-transform}
                        />
                    ))}
                     <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center text-center px-12">
                         <h2 className="text-8xl font-bangers text-red-600">APAKAH KAMU SIAP?</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

const BreakoutSection: React.FC = () => {
    return (
        <div className="py-20 bg-yellow-400 text-black overflow-x-clip">
            <div className="container mx-auto text-center relative">
                <h2 className="text-6xl md:text-8xl font-bangers mb-4">HANCURKAN BATAS</h2>
                <p className="max-w-3xl mx-auto text-lg">Efek paralaks dan 3D inovatif kami membuat karakter terasa seolah-olah melompat keluar dari layar dan mendobrak batas dunia game.</p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="h-96 bg-neutral-900 clip-comic-1 border-4 border-black">
                        <img src="https://picsum.photos/seed/bg1/600/800" className="w-full h-full object-cover"/>
                    </div>

                    <div className="relative h-96">
                        <div className="absolute inset-0 bg-red-600 clip-comic-2 border-4 border-black z-10">
                           <img src="https://picsum.photos/seed/bg2/600/800" className="w-full h-full object-cover opacity-50"/>
                        </div>
                        <img 
                            src="https://res.cloudinary.com/dj0draukr/image/upload/v1761912986/28u12882_cxosy8.png" 
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-[350px] z-20"
                            alt="Character breaking out"
                            style={{
                                filter: 'drop-shadow(10px 10px 15px rgba(0,0,0,0.5))'
                            }}
                        />
                         <ComicText text="MINGGIR!" className="text-3xl absolute top-10 right-0 z-30" />
                    </div>

                    <div className="h-96 bg-neutral-900 clip-comic-1 border-4 border-black">
                         <img src="https://picsum.photos/seed/bg3/600/800" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-7xl font-bangers text-yellow-400 mb-2" style={{ WebkitTextStroke: '2px black' }}>SIAP BERTARUNG?</h2>
                <p className="mt-2 max-w-lg mx-auto text-neutral-300">Pertarungan belum berakhir. Ini baru permulaan. Ambil demonya dan taklukkan takdirmu.</p>
                <div className="mt-8">
                    <a
                        href="https://drive.google.com/drive/folders/15x1BYmXuN1MDZj8H18qIqjfy6n_y6rad?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-400 text-black font-bangers text-4xl px-12 py-4 rounded-md border-4 border-black transition-all transform hover:scale-110 hover:bg-red-600 hover:text-white active:scale-105 shadow-[8px_8px_0px_rgba(229,62,62,1)] hover:shadow-[10px_10px_0px_rgba(255,255,255,1)]">
                        UNDUH DEMO
                    </a>
                </div>
                <p className="text-neutral-600 mt-12 text-xs italic">Please lolosin tim kita bg pgn bantai bantai</p>
                <p className="text-neutral-500 mt-2 text-sm">&copy; 2025 Langit Baru Studios.</p>
            </div>
        </footer>
    );
}

const App: React.FC = () => {
  return (
    <div className="bg-neutral-900">
      <Header />
      <main>
        <HeroSection />
        <ShuffleSection />
        <HorizontalScrollSection />
        <BreakoutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;