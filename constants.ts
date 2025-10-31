export interface Character {
    name: string;
    imageUrl: string;
    videoUrl?: string;
    description: string;
    style: string;
}

export const characters: Character[] = [
    {
        name: 'Rei',
        imageUrl: 'https://picsum.photos/seed/rei/400/600',
        description: 'Berandalan yang suka tawuran.',
        style: 'Kakak laki-laki'
    },
    {
        name: 'Airi',
        imageUrl: 'https://picsum.photos/seed/airi/400/600',
        description: 'Adik Rei yang hilang.',
        style: 'Adik perempuan'
    },
    {
        name: 'Davin',
        imageUrl: 'https://picsum.photos/seed/davin/400/600',
        description: 'Pimpinan Geng sekolah.',
        style: 'Rival'
    },
    {
        name: 'Musuh Besar',
        imageUrl: 'https://picsum.photos/seed/musuh/400/600',
        description: 'Identitas dan tujuannya masih menjadi misteri kelam yang menyelimuti kota.',
        style: 'Antagonis [RAHASIA]'
    }
];

export const gameFeatures: Character[] = [
    {
        name: 'Arena 3D Dinamis',
        imageUrl: 'https://picsum.photos/seed/stage1/800/600',
        videoUrl: 'https://res.cloudinary.com/dj0draukr/video/upload/v1761914663/Recording_2025-10-31_193719_x8gx8c.mp4',
        description: 'Bertarung di lingkungan interaktif berlapis. Lemparkan lawan menembus dinding dan gunakan dunia sebagai senjatamu.',
        style: 'PERTARUNGAN LINGKUNGAN'
    },
    {
        name: 'Cutscene Animasi',
        imageUrl: 'https://picsum.photos/seed/stage2/800/600',
        description: 'Cutscene animasi penuh, menyajikan cerita dengan cara yang lebih emosional daripada sekadar teks biasa.',
        style: 'CUTSCENE BUKAN CUMA TEKS'
    },
    {
        name: 'Sistem Kombo yang Lancar',
        imageUrl: 'https://picsum.photos/seed/stage3/800/600',
        description: 'Mudah dipelajari, sulit dikuasai. Rangkai serangan ringan, berat, dan spesial untuk menciptakan kombo khasmu sendiri.',
        style: 'MEKANIK MENDALAM'
    },
     {
        name: 'Kerusuhan Co-op',
        imageUrl: 'https://picsum.photos/seed/stage4/800/600',
        description: 'Bekerja sama dengan teman secara online atau di sofa yang sama dan bersihkan jalanan bersama dalam mode co-op khusus.',
        style: 'AKSI TIM TAG'
    }
];