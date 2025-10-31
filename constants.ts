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
        videoUrl: 'https://res.cloudinary.com/dj0draukr/video/upload/v1761913586/Salinan_dari_Cpt_Pulang_ya_kak_enauk3.mp4',
        description: 'Cutscene animasi penuh, menyajikan cerita dengan cara yang lebih emosional daripada sekadar teks biasa.',
        style: 'CUTSCENE BUKAN CUMA TEKS'
    },
    {
        name: 'Musuh Yang Berbeda',
        imageUrl: 'https://picsum.photos/seed/stage3/800/600',
        videoUrl: 'https://res.cloudinary.com/dj0draukr/video/upload/v1761925645/Recording_2025-10-31_224658_azo8dv.mp4',
        description: 'Lawan musuh yang berbeda beda, tampilkan pertarungan yang imersive dan tidak monoton.',
        style: 'KARAKTER BERAGAM'
    },
     {
        name: 'Tempat Yang Beragam',
        imageUrl: 'https://picsum.photos/seed/stage4/800/600',
        videoUrl: 'https://res.cloudinary.com/dj0draukr/video/upload/v1761927770/park_y0hrfo.mp4',
        description: 'Jelajahi berbagai lingkungan yang berbeda berdasarkan cerita.',
        style: 'EKSPLORASI'
    }
];