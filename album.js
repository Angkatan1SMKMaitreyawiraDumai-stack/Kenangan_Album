    // Album Photo data for all categories
const albumsData = {
    angkatan: [
        { id: 1, src: 'angkatan1.JPG', title: 'Foto Angkatan 1', category: 'Group' },
        { id: 2, src: 'angkatan1(2).jpg', title: 'Foto Angkatan 1', category: 'Portrait' },
        { id: 3, src: 'SMK.jpg', title: 'Foto Murid Angkatan 1', category: 'Portrait' },
        { id: 4, src: 'SMK(1).jpg', title: 'Foto Murid Angkatan 1', category: 'Portrait' },
        { id: 5, src: 'foto angkatan 1.jpg', title: 'Foto Murid Angkatan 1', category: 'Portrait' },
        { id: 6, src: 'foto angkatan 1 no 2.jpg', title: 'Foto Murid Angkatan 1', category: 'Portrait' },
        { id: 7, src: 'guru1.JPG', title: 'Foto Guru', category: 'Portrait' },
        { id: 8, src: 'guru2.JPG', title: 'Foto Guru', category: 'Portrait' },
        { id: 9, src: 'bersama9.jpeg', title: 'Upacara', category: 'Portrait' },
        { id: 10, src: 'bersama10.jpeg', title: 'Upacara', category: 'Portrait' },
        { id: 11, src: 'bersama7.jpeg', title: 'Imlek', category: 'Portrait' },
        { id: 12, src: '17agustus.jpeg', title: 'Pemenang 17 Agustus', category: 'Portrait' },
        { id: 67, src: '17agustus2.jpeg', title: '17 Agustus', category: 'Portrait' },
        { id: 13, src: 'bersama15.jpeg', title: 'Perpisahan Ls Yana', category: 'Portrait' },
        { id: 14, src: 'bersama16.jpeg', title: 'Pernikahan Ls Yana', category: 'Portrait' },
        { id: 15, src: 'bersama17.jpeg', title: 'Kunjungan Lancang Kuning', category: 'Portrait' },
        { id: 16, src: 'bersama13.jpeg', title: 'Jalan-jalan mall', category: 'Group' },
        { id: 17, src: 'bersama14.jpeg', title: 'Imlek Rumah Ls Devi', category: 'Portrait' },
        { id: 18, src: 'bersama8.jpeg', title: 'Makan es krim bareng', category: 'Portrait' },
        { id: 19, src: 'bersama4.jpeg', title: 'Nonton bareng', category: 'Portrait' },
        { id: 20, src: 'bersama5.jpeg', title: 'Nonton bareng', category: 'Portrait' },
        { id: 21, src: 'bersama21.jpeg', title: 'Nonton bareng', category: 'Portrait' },
        { id: 22, src: 'foto ls 2.jpeg', title: 'Nonton bareng', category: 'Portrait' },
        { id: 23, src: 'bersama20.jpeg', title: 'Nonton bareng', category: 'Portrait' },
        { id: 24, src: 'bersama19.jpeg', title: 'Nonton Bareng', category: 'Portrait' },
        { id: 25, src: 'bersama12.jpeg', title: 'Hari Pahlawan', category: 'Portrait' },
        { id: 26, src: 'bersama11.jpeg', title: 'Projek P5', category: 'Portrait' },
        { id: 27, src: 'bersama18.jpeg', title: 'Hari Guru', category: 'Portrait' },
        { id: 28, src: 'pahlawan1.jpeg', title: 'Hari pahlawan', category: 'Portrait' },
        { id: 29, src: 'pahlawan2.jpeg', title: 'Upacara hari pahlawan', category: 'Portrait' },
        { id: 30, src: 'pahlawan3.jpeg', title: 'Upacara hari pahlawan', category: 'Portrait' },
        { id: 31, src: 'pahlawan4.jpeg', title: 'Hari pahlawan', category: 'Group' },
        { id: 32, src: 'pahlawan5.jpeg', title: 'Hari pahlawan', category: 'Portrait' },
        { id: 33, src: 'pahlawan6.jpeg', title: 'Hari pahlawan', category: 'Portrait' },
        { id: 34, src: 'pahlawan7.jpeg', title: 'Hari Pahlawan', category: 'Portrait' },
        { id: 35, src: 'imlek 1.jpeg', title: 'Acara imlek', category: 'Portrait' },
        { id: 36, src: 'imlek 2.jpeg', title: 'Acara imlek the gank', category: 'Portrait' },
        { id: 37, src: 'p5 1.jpeg', title: 'Makanan tradisional P5', category: 'Group' },
        { id: 38, src: 'p5 2.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 39, src: 'p5 3.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 40, src: 'p5 4.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 41, src: 'p5 5.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 42, src: 'p5 6.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 43, src: 'p5 7.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 44, src: 'p5 8.jpeg', title: 'Makanan tradisional P5', category: 'Portrait' },
        { id: 45, src: 'p5 pasar.jpeg', title: 'Projek P5', category: 'Portrait' },
        { id: 46, src: 'p5 baju.jpeg', title: 'Baju adat P5', category: 'Portrait' },
        { id: 47, src: 'p5 adat 2.jpeg', title: 'Jualan projek P5', category: 'Portrait' },
        { id: 48, src: 'p5 pemenang.jpeg', title: 'Pemenang Mini Hiking', category: 'Portrait' },
        { id: 49, src: 'p5 sekolah.jpeg', title: 'Projek P5 anti bullying', category: 'Portrait' },
        { id: 50, src: 'p5 sekolah2.jpeg', title: 'Projek P5 anti bullying', category: 'Portrait' },
        { id: 51, src: 'p5 welem.jpeg', title: 'Projek P5 anti bullying', category: 'Portrait' },
        { id: 70, src: 'p5 sekolah3.jpeg', title: 'Projek P5 anti bullying', category: 'Portrait' },
        { id: 71, src: 'p5 sekolah4.jpeg', title: 'Projek P5 anti bullying', category: 'Portrait' },
        { id: 52, src: 'bersama 2.jpeg', title: 'Projek P5 Makanan Tradisional', category: 'Portrait' },
        { id: 53, src: 'jualan1.jpeg', title: 'Jualan anak OSIS', category: 'Portrait' },
        { id: 54, src: 'ekowalk.jpeg', title: 'Eko Walk', category: 'Portrait' },
        { id: 55, src: 'mini hiking eps1.jpeg', title: 'Mini Hiking', category: 'Portrait' },
        { id: 56, src: 'mini hiking eps2.jpeg', title: 'Mini Hiking', category: 'Group' },
        { id: 57, src: 'mini hiking eps3.jpeg', title: 'Mini Hiking', category: 'Portrait' },
        { id: 58, src: 'mini hiking 4.jpeg', title: 'Mini Hiking', category: 'Portrait' },
        { id: 59, src: 'mini hiking 5.jpeg', title: 'Mini Hiking', category: 'Portrait' },
        { id: 60, src: 'mini hiking 6.jpeg', title: 'Mini Hiking', category: 'Portrait' },
        { id: 61, src: 'bersama1.jpeg', title: 'Mini Hiking', category: 'Portrait' },
        { id: 62, src: 'ep1.jpeg', title: 'Etika Profesi', category: 'Portrait' },
        { id: 63, src: 'ep2.jpeg', title: 'Etika Profesi', category: 'Portrait' },
        { id: 64, src: 'ep3.jpeg', title: 'Etika Profesi', category: 'Portrait' },
        { id: 65, src: 'ep4.jpeg', title: 'Etika Profesi', category: 'Portrait' },
        { id: 66, src: 'ep6.jpeg', title: 'Etika Profesi', category: 'Portrait' },
        { id: 68, src: 'permainan.jpeg', title: 'Permainan coret muka', category: 'Portrait' },
        { id: 69, src: 'permainan2.jpeg', title: 'Permainan coret muka', category: 'Portrait' },
        { id: 72, src: 'persiapan bazar.jpeg', title: 'Persiapan Bazar', category: 'Portrait' },
        { id: 73, src: '17 Agustus15.jpg', title: '17 Agustus', category: 'Portrait' },
        { id: 74, src: '17 Agustus16.jpg', title: '17 Agustus', category: 'Portrait' },
        { id: 75, src: '17 Agustus17.jpg', title: '17 Agustus', category: 'Portrait' },
        { id: 76, src: '17 Agustus18.jpg', title: '17 Agustus', category: 'Portrait' },
        { id: 77, src: '17Agustus19.jpg', title: '17 Agustus', category: 'Portrait' },
        { id: 78, src: 'Guru15.jpg', title: 'Guru/Lao shi', category: 'Portrait' },
        { id: 79, src: 'Guru16.jpg', title: 'Guru/Lao shi', category: 'Portrait' },
        { id: 80, src: 'Guru17.jpg', title: 'Guru/Lao shi', category: 'Portrait' },
        { id: 81, src: 'Guru18.jpg', title: 'Guru/Lao shi', category: 'Portrait' },
        { id: 82, src: 'Guru19.jpg', title: 'Guru/Lao shi', category: 'Portrait' },
        { id: 83, src: 'PKL1.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 84, src: 'PKL2.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 85, src: 'PKL3.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Group' },
        { id: 86, src: 'PKL4.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 87, src: 'PKL5.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 88, src: 'PKL6.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 89, src: 'PKL7.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 90, src: 'PKL8.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 91, src: 'PKL9.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 92, src: 'PKL10.jpg', title: 'PKL (Praktik Kerja Lapangan)', category: 'Portrait' },
        { id: 93, src: 'makan sehat.jpg', title: 'Makan Sehat', category: 'Portrait' },
        { id: 94, src: 'makan sehat2.jpg', title: 'Makan Sehat', category: 'Portrait' },
        { id: 95, src: 'makan sehat3.jpg', title: 'Makan Sehat', category: 'Portrait' },
        { id: 96, src: 'makan sehat4.jpg', title: 'Makan Sehat', category: 'Portrait' },
        { id: 97, src: 'makan sehat5.jpg', title: 'Makan Sehat', category: 'Portrait' },
        { id: 98, src: 'makan sehat6.jpg', title: 'Makan Sehat', category: 'Portrait' }
    ],
    tkj: [
        { id: 1, src: 'jumanji1.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 2, src: 'jumanji2.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 3, src: 'jumanji3.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 4, src: 'jumanji4.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 5, src: 'jumanji5.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 6, src: 'jumanji6.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 7, src: 'jumanji7.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 8, src: 'jumanji8.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 9, src: 'jumanji9.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 10, src: 'jumanji10.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 11, src: 'jumanji11.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 12, src: 'jumanji12.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 13, src: 'jumanji13.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 14, src: 'jumanji14.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 15, src: 'jumanji15.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 16, src: 'jumanji16.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 17, src: 'jumanji17.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 18, src: 'jumanji18.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 19, src: 'jumanji19.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 20, src: 'jumanji20.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 21, src: 'jumanji21.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 22, src: 'jumanji22.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 23, src: 'jumanji23.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 24, src: 'jumanji24.jpg', title: 'Jumanji', category: 'Memory' },
        { id: 25, src: 'jumanji25.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 26, src: 'jumanji26.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 27, src: 'jumanji27.jpg', title: 'Jumanji', category: 'Portrait' },
        { id: 28, src: 'jumanji28.jpg', title: 'Jumanji', category: 'Moment' },
        { id: 29, src: 'pantai1.jpg', title: 'Pantai', category: 'Memory' },
        { id: 30, src: 'pantai2.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 31, src: 'pantai3.jpg', title: 'Pantai', category: 'Moment' },
        { id: 32, src: 'pantai4.jpg', title: 'Pantai', category: 'Memory' },
        { id: 33, src: 'pantai5.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 34, src: 'pantai6.jpg', title: 'Pantai', category: 'Moment' },
        { id: 35, src: 'pantai7.jpg', title: 'Pantai', category: 'Memory' },
        { id: 36, src: 'pantai8.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 37, src: 'pantai9.jpg', title: 'Pantai', category: 'Moment' },
        { id: 38, src: 'pantai10.jpg', title: 'Pantai', category: 'Memory' },
        { id: 39, src: 'pantai11.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 40, src: 'pantai12.jpg', title: 'Pantai', category: 'Moment' },
        { id: 41, src: 'pantai13.jpg', title: 'Pantai', category: 'Memory' },
        { id: 42, src: 'pantai14.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 43, src: 'pantai15.jpg', title: 'Pantai', category: 'Moment' },
        { id: 44, src: 'pantai16.jpg', title: 'Pantai', category: 'Memory' },
        { id: 45, src: 'pantai17.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 46, src: 'pantai18.jpg', title: 'Pantai', category: 'Moment' },
        { id: 47, src: 'pantai19.jpg', title: 'Pantai', category: 'Memory' },
        { id: 49, src: 'pantai20.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 50, src: 'pantai21.jpg', title: 'Pantai', category: 'Moment' },
        { id: 51, src: 'pantai22.jpg', title: 'Pantai', category: 'Memory' },
        { id: 52, src: 'pantai23.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 53, src: 'pantai24.jpg', title: 'Pantai', category: 'Moment' },
        { id: 54, src: 'pantai25.jpg', title: 'Pantai', category: 'Memory' },
        { id: 55, src: 'pantai26.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 56, src: 'pantai27.jpg', title: 'Pantai', category: 'Moment' },
        { id: 57, src: 'pantai28.jpg', title: 'Pantai', category: 'Memory' },
        { id: 58, src: 'pantai29.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 59, src: 'pantai30.jpg', title: 'Pantai', category: 'Moment' },
        { id: 60, src: 'pantai31.jpg', title: 'Pantai', category: 'Memory' },
        { id: 61, src: 'pantai32.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 62, src: 'pantai34.jpg', title: 'Pantai', category: 'Moment' },
        { id: 63, src: 'pantai35.jpg', title: 'Pantai', category: 'Memory' },
        { id: 64, src: 'pantai36.jpg', title: 'Pantai', category: 'Moment' },
        { id: 65, src: 'pantai37.jpg', title: 'Pantai', category: 'Memory' },
        { id: 66, src: 'pantai38.jpg', title: 'Pantai', category: 'Portrait' },
        { id: 67, src: 'pantai39.jpg', title: 'Pantai', category: 'Moment' },
        { id: 68, src: 'pantai40.jpg', title: 'Pantai', category: 'Memory' },
        { id: 69, src: 'pantai41.jpeg', title: 'Pantai', category: 'Moment' },
        { id: 69, src: 'tkj1.jpeg', title: 'Angkatan Pertama TKJ', category: 'Memory' },
        { id: 70, src: 'tkj2.jpeg', title: 'Angkatan Pertama TKJ', category: 'Portrait' },
        { id: 71, src: 'tkj3.jpeg', title: 'Kunjungan pembuatan teh China', category: 'Moment' },
        { id: 72, src: 'tkj4.jpeg', title: 'Kunjungan Than Chu dari Bali', category: 'Memory' },
        { id: 73, src: 'tkj5.jpeg', title: 'Lit Fest', category: 'Portrait' },
        { id: 74, src: 'tkj6.jpeg', title: 'Lit Fest', category: 'Moment' }
    ],
    akuntansi: [
        { id: 1, src: 'piknik1.jpeg', title: 'Caught in the garden’s glow.', category: 'Portrait' },
        { id: 2, src: 'piknik2.jpeg', title: 'Caught in the garden’s glow.', category: 'Moment' },
        { id: 3, src: 'piknik3.jpeg', title: 'Caught in the garden’s glow.', category: 'Memory' },
        { id: 4, src: 'piknik4.jpeg', title: 'Caught in the garden’s glow.', category: 'Portrait' },
        { id: 5, src: 'piknik5.jpeg', title: 'Caught in the garden’s glow.', category: 'Moment' },
        { id: 6, src: 'piknik6.jpeg', title: 'Caught in the garden’s glow.', category: 'Memory' },
        { id: 7, src: 'piknik7.jpeg', title: 'Caught in the garden’s glow.', category: 'Portrait' },
        { id: 8, src: 'piknik8.jpeg', title: 'Caught in the garden’s glow.', category: 'Moment' },
        { id: 9, src: 'piknik9.jpeg', title: 'Caught in the garden’s glow.', category: 'Memory' },
        { id: 10, src: 'piknik10.jpeg', title: 'Caught in the garden’s glow.', category: 'Portrait' },
        { id: 11, src: 'tayo1.jpeg', title: 'Caught in the garden’s glow.(Tayomi)', category: 'Moment' },
        { id: 12, src: 'tayo2.jpeg', title: 'Caught in the garden’s glow.(Tayomi)', category: 'Memory' },
        { id: 13, src: 'selly1.jpeg', title: 'Caught in the garden’s glow.(Selly)', category: 'Portrait' },
        { id: 14, src: 'selly2.jpeg', title: 'Caught in the garden’s glow.(Selly)', category: 'Moment' },
        { id: 15, src: 'mel1.jpeg', title: 'Caught in the garden’s glow.(Melani)', category: 'Memory' },
        { id: 16, src: 'mel2.jpeg', title: 'Caught in the garden’s glow.(Melani)', category: 'Portrait' },
        { id: 17, src: 'valen1.jpeg', title: 'Caught in the garden’s glow.(Valentina)', category: 'Moment' },
        { id: 18, src: 'valen2.jpeg', title: 'Caught in the garden’s glow.(Valentina)', category: 'Memory' },
        { id: 19, src: 'vanessa1.jpeg', title: 'Caught in the garden’s glow.(Vanessa)', category: 'Portrait' },
        { id: 20, src: 'vanessa2.jpeg', title: 'Caught in the garden’s glow.(Vanessa)', category: 'Moment' },
        { id: 21, src: 'febri1.jpeg', title: 'Caught in the garden’s glow.(Febriani)', category: 'Memory' },
        { id: 22, src: 'febri2.jpeg', title: 'Caught in the garden’s glow.(Febriani)', category: 'Portrait' },
        { id: 23, src: 'lucky1.jpeg', title: 'Caught in the garden’s glow.(Lucky)', category: 'Moment' },
        { id: 24, src: 'lucky2.jpeg', title: 'Caught in the garden’s glow.(Lucky)', category: 'Memory' },
        { id: 25, src: 'budat1.jpg', title: 'Caught in the garden’s glow.', category: 'Portrait' },
        { id: 26, src: 'budat2.jpg', title: 'Caught in the garden’s glow.', category: 'Moment' },
        { id: 27, src: 'budat3.jpg', title: 'Caught in the garden’s glow.(Tayomi)', category: 'Memory' },
        { id: 28, src: 'budat4.jpg', title: 'Caught in the garden’s glow.(Valentina)', category: 'Portrait' },
        { id: 29, src: 'budat5.jpg', title: 'Caught in the garden’s glow.(Melani)', category: 'Moment' },
        { id: 30, src: 'budat6.jpg', title: 'Caught in the garden’s glow.(Vanessa)', category: 'Memory' },
        { id: 31, src: 'budat7.jpg', title: 'Caught in the garden’s glow.(Selly)', category: 'Portrait' },
        { id: 32, src: 'budat8.jpg', title: 'Caught in the garden’s glow.(Selly)', category: 'Moment' },
        { id: 33, src: 'budat9.jpg', title: 'Caught in the garden’s glow.(Tayomi)', category: 'Memory' },
        { id: 34, src: 'budat10.jpg', title: 'Caught in the garden’s glow.', category: 'Portrait' },
        { id: 35, src: 'pantaiak1.jpg', title: 'Ocean whispers in floral hues.', category: 'Moment' },
        { id: 36, src: 'pantaiak2.jpg', title: 'Ocean whispers in floral hues.', category: 'Memory' },
        { id: 37, src: 'pantaiak3.jpg', title: 'Ocean whispers in floral hues.', category: 'Portrait' },
        { id: 38, src: 'pantaiak4.jpg', title: 'Ocean whispers in floral hues.', category: 'Moment' },
        { id: 39, src: 'pantaiak5.jpg', title: 'Ocean whispers in floral hues.', category: 'Memory' },
        { id: 40, src: 'pantaiak6.jpg', title: 'Ocean whispers in floral hues.', category: 'Portrait' },
        { id: 41, src: 'pantaiak7.jpg', title: 'Ocean whispers in floral hues.', category: 'Moment' },
        { id: 42, src: 'pantaiak8.jpg', title: 'Ocean whispers in floral hues.', category: 'Memory' },
        { id: 43, src: 'pantaiak9.jpg', title: 'Ocean whispers in floral hues.(Selly)', category: 'Portrait' },
        { id: 44, src: 'pantaiak10.jpg', title: 'Ocean whispers in floral hues.(Vanessa)', category: 'Moment' },
        { id: 45, src: 'pantaiak11.jpg', title: 'Ocean whispers in floral hues.(Vanessa)', category: 'Memory' },
        { id: 46, src: 'pantaiak12.jpg', title: 'Ocean whispers in floral hues.(Selly)', category: 'Portrait' },
        { id: 47, src: 'pantaiak13.jpg', title: 'Ocean whispers in floral hues.(Melani)', category: 'Moment' },
        { id: 48, src: 'pantaiak14.jpg', title: 'Ocean whispers in floral hues.(Melani & Valentina)', category: 'Memory' },
        { id: 49, src: 'pink1.jpg', title: 'Diet? Not today, pinky promise!', category: 'Portrait' },
        { id: 50, src: 'pink2.jpg', title: 'Diet? Not today, pinky promise!', category: 'Moment' },
        { id: 51, src: 'pink3.jpg', title: 'Diet? Not today, pinky promise!', category: 'Memory' },
        { id: 52, src: 'pink4.jpg', title: 'Diet? Not today, pinky promise!', category: 'Portrait' },
        { id: 53, src: 'pink5.jpg', title: 'Diet? Not today, pinky promise!', category: 'Moment' },
        { id: 54, src: 'pink6.jpg', title: 'Diet? Not today, pinky promise!', category: 'Memory' },
        { id: 55, src: 'pink7.jpg', title: 'Diet? Not today, pinky promise!', category: 'Portrait' },
        { id: 56, src: 'pink8.jpg', title: 'Diet? Not today, pinky promise!', category: 'Moment' },
        { id: 57, src: 'pink9.jpg', title: 'Diet? Not today, pinky promise!(Tayomi)', category: 'Memory' },
        { id: 58, src: 'pink10.jpg', title: 'Diet? Not today, pinky promise!(Melani & Valentina)', category: 'Portrait' },
        { id: 59, src: 'pink11.jpg', title: 'Diet? Not today, pinky promise!(Vanessa)', category: 'Moment' },
        { id: 60, src: 'pink12.jpg', title: 'Diet? Not today, pinky promise!(Lucky)', category: 'Memory' },
        { id: 61, src: 'pink13.jpg', title: 'Diet? Not today, pinky promise!(Lucky', category: 'Portrait' },
        { id: 62, src: 'pink14.jpg', title: 'Diet? Not today, pinky promise!(Lucky)', category: 'Moment' },
        { id: 63, src: 'pink15.jpg', title: 'Diet? Not today, pinky promise!(Valentina & Melani)', category: 'Memory' },
        { id: 64, src: 'ak1.jpeg', title: 'Projek P5', category: 'Portrait' },
        { id: 65, src: 'ak2.jpeg', title: 'Akuntansi & Ls Yana', category: 'Moment' },
        { id: 66, src: 'ak3.jpeg', title: 'Akuntansi & Ls Rahmi', category: 'Memory' },
        { id: 67, src: 'ak4.jpeg', title: 'Akuntansi & Ls Salsa', category: 'Portrait' },
        { id: 68, src: 'ak5.jpeg', title: 'Hari Pahlawan', category: 'Moment' },
        { id: 69, src: 'ak6.jpeg', title: 'Akuntansi & Ls Ade', category: 'Memory' }
    ],
    momen: [
        { id: 1, src: 'aib1.jpeg', title: 'Wilson dengan rambut belah', category: 'Group' },
        { id: 2, src: 'aib2.jpeg', title: 'Chandra mode paskibra', category: 'Portrait' },
        { id: 3, src: 'aib3.jpeg', title: 'Owen bash kuyup', category: 'Moment' },
        { id: 4, src: 'aib4.jpeg', title: 'Wilson terbang bebas', category: 'Memory' },
        { id: 5, src: 'aib5.jpeg', title: 'Cinta Vino & Jansen', category: 'Portrait' },
        { id: 6, src: 'aib6.jpeg', title: 'Vino & Dicky', category: 'Moment' },
        { id: 7, src: 'aib7.jpeg', title: 'Wilson babe', category: 'Memory' },
        { id: 8, src: 'aib8.jpeg', title: 'Mak cik Wilson', category: 'Portrait' },
        { id: 9, src: 'aib9.jpeg', title: 'Vino tidur', category: 'Moment' },
        { id: 10, src: 'aib10.jpeg', title: 'Kelompok Wilson & Bryan', category: 'Memory' },
        { id: 11, src: 'aib11.jpeg', title: 'Kecepatan datang sekolah', category: 'Portrait' },
        { id: 12, src: 'aib12.jpeg', title: 'Lomba 17 Agustus', category: 'Moment' },
        { id: 13, src: 'aib13.jpeg', title: 'Lucky latihan nari', category: 'Memory' },
        { id: 14, src: 'aib14.jpeg', title: 'Wilson', category: 'Portrait' },
        { id: 15, src: 'aib15.jpeg', title: 'Chandra', category: 'Moment' },
        { id: 16, src: 'aib16.jpeg', title: 'Chandra nyuci', category: 'Memory' },
        { id: 17, src: 'aib17.jpeg', title: 'Beres beres bazar', category: 'Group' },
        { id: 18, src: 'aib18.jpeg', title: 'Chandra', category: 'Portrait' },
        { id: 19, src: 'aib19.jpeg', title: 'Jualan bazar', category: 'Moment' },
        { id: 20, src: 'aib20.jpeg', title: 'Menung', category: 'Memory' },
        { id: 21, src: 'aib21.jpeg', title: 'Diskusi Usaha', category: 'Portrait' },
        { id: 22, src: 'aib22.jpeg', title: 'Makeran', category: 'Moment' },
        { id: 23, src: 'aib23.jpeg', title: 'Maskeran', category: 'Memory' },
        { id: 24, src: 'aib24.jpeg', title: 'Maskeran Vino', category: 'Portrait' },
        { id: 25, src: 'aib25.jpeg', title: 'Maskeran', category: 'Moment' },
        { id: 26, src: 'aib26.jpeg', title: 'Mode fokus', category: 'Memory' },
        { id: 27, src: 'aib27.jpeg', title: 'Vino & Risky', category: 'Portrait' },
        { id: 28, src: 'aib28.jpeg', title: 'Nichol sayang adek', category: 'Moment' },
        { id: 29, src: 'aib29.jpeg', title: 'Dicky', category: 'Memory' },
        { id: 30, src: 'aib30.jpeg', title: 'Lucky', category: 'Portrait' },
        { id: 31, src: 'aib31.jpeg', title: 'Wilson bobo', category: 'Moment' },
        { id: 32, src: 'aib32.jpeg', title: 'Ls Chandra', category: 'Memory' },
        { id: 33, src: 'aib33.jpeg', title: 'Before WHB', category: 'Group' },
        { id: 34, src: 'aib34.jpeg', title: 'Chandra GTW', category: 'Portrait' },
        { id: 35, src: 'aib35.jpeg', title: 'After WHB', category: 'Moment' },
        { id: 36, src: 'aib36.jpeg', title: 'Chandra', category: 'Memory' },
        { id: 37, src: 'aib37.jpeg', title: 'Vino', category: 'Portrait' },
        { id: 38, src: 'aib38.jpeg', title: 'Vino', category: 'Moment' },
        { id: 39, src: 'aib39.jpeg', title: 'Vino', category: 'Memory' },
        { id: 40, src: 'aib40.jpeg', title: 'Chandra', category: 'Portrait' },
        { id: 41, src: 'aib41.jpeg', title: 'Nichol', category: 'Moment' },
        { id: 42, src: 'aib42.jpeg', title: 'Chandra', category: 'Memory' },
        { id: 43, src: 'aib43.jpeg', title: 'Nicholl', category: 'Portrait' },
        { id: 44, src: 'aib44.jpeg', title: 'Wilson Sepatu kaca', category: 'Moment' },
        { id: 45, src: 'aib45.jpeg', title: 'Jansen & Vino', category: 'Memory' },
        { id: 46, src: 'aib46.jpeg', title: 'Nicholl Bobo', category: 'Portrait' },
        { id: 47, src: 'aib47.jpeg', title: 'Bersinarlah', category: 'Moment' },
        { id: 48, src: 'aib48.jpeg', title: 'Welem & Maverick', category: 'Memory' },
        { id: 49, src: 'aib49.jpeg', title: 'Owen & Jansen', category: 'Group' },
        { id: 50, src: 'aib50.jpeg', title: 'Trend Penguins', category: 'Portrait' },
        { id: 51, src: 'aib51.jpeg', title: 'Kapten Wilson', category: 'Moment' },
        { id: 52, src: 'aib52.jpeg', title: 'Vino & Jansen Bobo', category: 'Memory' },
        { id: 53, src: 'aib53.jpeg', title: 'Vino Senyum', category: 'Portrait' },
        { id: 54, src: 'aib54.jpeg', title: 'Vino & Jansen', category: 'Moment' },
        { id: 55, src: 'aib55.jpeg', title: 'Vino & Jansen', category: 'Memory' },
        { id: 56, src: 'aib56.jpeg', title: 'Owen', category: 'Portrait' },
        { id: 57, src: 'aib57.jpeg', title: 'Vino', category: 'Moment' },
        { id: 58, src: 'aib58.jpeg', title: 'Vino Mandi', category: 'Memory' },
        { id: 59, src: 'aib59.jpeg', title: 'Geremnye aku', category: 'Portrait' },
        { id: 60, src: 'aib60.jpeg', title: 'Vino Sang Penguasa', category: 'Moment' },
        { id: 61, src: 'aib61.jpeg', title: 'fashion show', category: 'Memory' },
        { id: 62, src: 'aib62.jpeg', title: 'Wilson kangen', category: 'Portrait' },
        { id: 63, src: 'aib63.jpeg', title: 'Wilson', category: 'Moment' },
        { id: 64, src: 'aib64.jpeg', title: 'Vino WHB', category: 'Memory' },
        { id: 65, src: 'aib65.jpeg', title: 'Guru', category: 'Moment' },
        { id: 66, src: 'aib66.jpeg', title: 'Acara pernikahan Ls Devi', category: 'Memory' },
        { id: 67, src: 'aib67.jpeg', title: 'Acara pernikahan Ls Devi', category: 'Memory' },
        { id: 68, src: 'aib68.jpeg', title: 'pahlawan', category: 'Moment' },
        { id: 69, src: 'aib69.jpeg', title: 'Pak RT Owen', category: 'Memory' },
        { id: 70, src: 'aib70.jpeg', title: 'Owen Silat', category: 'Moment' },
        { id: 71, src: 'aib71.jpeg', title: 'Vino Sang Penguasa', category: 'Memory' },
        { id: 72, src: 'aib72.jpeg', title: 'Vino Sang Penguasa', category: 'Memory' },
        { id: 73, src: 'vino1.jpeg', title: 'Vino Tandra', category: 'Portrait' },
        { id: 74, src: 'vino2.jpeg', title: 'Vino Tandra', category: 'Moment' },
        { id: 75, src: 'vino3.jpeg', title: 'Vino Tandra', category: 'Memory' },
        { id: 76, src: 'vino4.jpeg', title: 'Vino Tandra', category: 'Group' },
        { id: 77, src: 'vino5.jpeg', title: 'Vino Tandra', category: 'Moment' },
        { id: 78, src: 'vino6.jpeg', title: 'Vino Tandra', category: 'Portrait' },
        { id: 79, src: 'vino7.jpeg', title: 'Vino Tandra', category: 'Memory' },
        { id: 80, src: 'vino8.jpeg', title: 'Vino Tandra', category: 'Memory' },
        { id: 81, src: 'nicholas1.jpeg', title: 'Nicholas Liem', category: 'Portrait' },
        { id: 82, src: 'nicholas2.jpeg', title: 'Nicholas Liem', category: 'Moment' },
        { id: 83, src: 'nicholas3.jpeg', title: 'Nicholas Liem', category: 'Memory' },
        { id: 84, src: 'nicholas4.jpeg', title: 'Nicholas Liem', category: 'Portrait' },
        { id: 85, src: 'nicholas5.jpeg', title: 'Nicholas Liem', category: 'Moment' },
        { id: 86, src: 'owen1.jpeg', title: 'Firming Owen', category: 'Memory' },
        { id: 87, src: 'owen2.jpeg', title: 'Firming Owen', category: 'Portrait' },
        { id: 88, src: 'owen3.JPG', title: 'Firming Owen', category: 'Moment' },
        { id: 89, src: 'welem1.jpeg', title: 'Weliem Lho', category: 'Memory' },
        { id: 90, src: 'welem2.jpeg', title: 'Weliem Lho', category: 'Portrait' },
        { id: 91, src: 'welem3.jpeg', title: 'Weliem Lho', category: 'Moment' },
        { id: 92, src: 'welem4.jpeg', title: 'Weliem Lho', category: 'Memory' },
        { id: 93, src: 'santo1.jpeg', title: 'Susanto', category: 'Group' },
        { id: 94, src: 'santo2.jpeg', title: 'Susanto', category: 'Portrait' },
        { id: 95, src: 'santo3.jpeg', title: 'Susanto', category: 'Portrait' },
        { id: 96, src: 'bryan1.jpeg', title: 'Bryan Max Clarence', category: 'Moment' },
        { id: 97, src: 'bryan2.JPG', title: 'Bryan Max Clarence', category: 'Memory' },
        { id: 98, src: 'chandra1.jpeg', title: 'Chandra Wijaya', category: 'Portrait' },
        { id: 99, src: 'chandra2.jpeg', title: 'Chandra Wijaya', category: 'Moment' },
        { id: 100, src: 'chandra3.jpeg', title: 'Chandra Wijaya', category: 'Memory' },
        { id: 101, src: 'chandra4.jpeg', title: 'Chandra Wijaya', category: 'Group' },
        { id: 102, src: 'chandra5.jpeg', title: 'Chandra Wijaya', category: 'Moment' },
        { id: 103, src: 'chandra6.jpeg', title: 'Chandra Wijaya', category: 'Portrait' },  
        { id: 104, src: 'welem10.jpg', title: 'Weliem P5', category: 'Group' },
        { id: 105, src: 'welem11.jpg', title: 'Weliem P5', category: 'Moment' },
        { id: 106, src: 'vino15.jpg', title: 'Vino P5', category: 'Portrait' }, 
        { id: 107, src: 'santo10.jpg', title: 'Susanto P5', category: 'Group' },
        { id: 108, src: 'owenchandra.jpg', title: 'Owen & Chandra P5', category: 'Moment' },
        { id: 109, src: 'maverick10.jpg', title: 'Maverick P5', category: 'Portrait' }
    ]
};

// Pagination settings
const photosPerPage = 12;

// Tab state
let currentTab = 'angkatan';
let currentPages = {
    angkatan: 1,
    tkj: 1,
    akuntansi: 1,
    momen: 1
};

// Zoom variables
let currentZoomLevel = 1;
let currentPhoto = null;

// Music variables
const bgMusic = document.getElementById('bgMusic');
const musicPlayer = document.getElementById('musicPlayer');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const musicStatus = document.getElementById('musicStatus');
let isPlaying = localStorage.getItem('musicPlaying') === 'true';

// Search functionality
let searchQuery = '';
let filteredPhotos = {
    angkatan: [...albumsData.angkatan],
    tkj: [...albumsData.tkj],
    akuntansi: [...albumsData.akuntansi],
    momen: [...albumsData.momen]
};

// Tab switching
function switchTab(tabName) {
    currentTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Render photos for the selected tab
    renderPhotos(tabName, currentPages[tabName]);

    // Scroll to album section
    window.scrollTo({ top: document.getElementById('album').offsetTop - 100, behavior: 'smooth' });
}

// Search photos
function searchPhotos(query) {
    searchQuery = query.toLowerCase().trim();

    Object.keys(albumsData).forEach(tab => {
        if (searchQuery === '') {
            filteredPhotos[tab] = [...albumsData[tab]];
        } else {
            filteredPhotos[tab] = albumsData[tab].filter(photo =>
                photo.title.toLowerCase().includes(searchQuery) ||
                photo.category.toLowerCase().includes(searchQuery)
            );
        }

        currentPages[tab] = 1;
        renderPhotos(tab, 1);
        updateNoResults(tab);
    });
}

// Update no results message
function updateNoResults(tab) {
    const noResults = document.getElementById(`noResults-${tab}`);
    const photoGrid = document.getElementById(`photoGrid-${tab}`);

    if (filteredPhotos[tab].length === 0) {
        noResults.classList.add('show');
        photoGrid.style.display = 'none';
    } else {
        noResults.classList.remove('show');
        photoGrid.style.display = 'grid';
    }
}

// Render photos for current page
function renderPhotos(tab, page) {
    const grid = document.getElementById(`photoGrid-${tab}`);
    const photosToDisplay = filteredPhotos[tab];
    const start = (page - 1) * photosPerPage;
    const end = start + photosPerPage;
    const photosToShow = photosToDisplay.slice(start, end);

    grid.innerHTML = '';

    photosToShow.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;

        card.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy" decoding="async" width="300" height="300">
            <div class="photo-actions">
                <button class="photo-action-btn" onclick="downloadPhoto('${photo.src}', '${photo.title}', '${tab}')" title="Save" aria-label="Download photo">
                    <i class="fas fa-download"></i>
                </button>
            </div>
            <div class="photo-overlay">
                <h3>${photo.title}</h3>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.photo-action-btn')) {
                openZoom(photo.id, tab);
            }
        });

        grid.appendChild(card);
    });

    updatePageInfo(tab);
    renderPagination(tab);
    updateTotalPages(tab);

    // Trigger animations
    requestAnimationFrame(() => {
        setTimeout(() => triggerAnimations(tab), 50);
    });
}

// Update total pages based on filtered results
function updateTotalPages(tab) {
    const newTotalPages = Math.ceil(filteredPhotos[tab].length / photosPerPage);
    if (!window.dynamicTotalPages) {
        window.dynamicTotalPages = {};
    }
    window.dynamicTotalPages[tab] = newTotalPages;
}

// Render pagination buttons
function renderPagination(tab) {
    const pagination = document.getElementById(`pagination-${tab}`);
    const totalPagesToUse = (window.dynamicTotalPages && window.dynamicTotalPages[tab]) || Math.ceil(albumsData[tab].length / photosPerPage);

    if (totalPagesToUse <= 1) {
        pagination.innerHTML = '';
        pagination.classList.remove('visible');
        return;
    }

    pagination.innerHTML = '';
    pagination.classList.add('visible');

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn nav-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPages[tab] === 1;
    prevBtn.addEventListener('click', () => goToPage(tab, currentPages[tab] - 1));
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPagesToUse; i++) {
        const btn = document.createElement('button');
        btn.className = `pagination-btn ${i === currentPages[tab] ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => goToPage(tab, i));
        pagination.appendChild(btn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn nav-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPages[tab] === totalPagesToUse;
    nextBtn.addEventListener('click', () => goToPage(tab, currentPages[tab] + 1));
    pagination.appendChild(nextBtn);
}

// Go to specific page
function goToPage(tab, page) {
    const totalPagesToUse = (window.dynamicTotalPages && window.dynamicTotalPages[tab]) || Math.ceil(albumsData[tab].length / photosPerPage);
    if (page >= 1 && page <= totalPagesToUse) {
        currentPages[tab] = page;
        renderPhotos(tab, currentPages[tab]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update page info
function updatePageInfo(tab) {
    const pageInfo = document.getElementById(`pageInfo-${tab}`);
    const totalPagesToUse = (window.dynamicTotalPages && window.dynamicTotalPages[tab]) || Math.ceil(albumsData[tab].length / photosPerPage);
    const start = (currentPages[tab] - 1) * photosPerPage + 1;
    const end = Math.min(currentPages[tab] * photosPerPage, filteredPhotos[tab].length);

    if (filteredPhotos[tab].length === 0) {
        pageInfo.textContent = 'Tidak ada foto yang ditemukan';
    } else if (searchQuery) {
        pageInfo.textContent = `Menampilkan ${start}-${end} dari ${filteredPhotos[tab].length} foto (hasil pencarian)`;
    } else {
        pageInfo.textContent = `Menampilkan ${start}-${end} dari ${albumsData[tab].length} foto`;
    }

    if (pageInfo.textContent) {
        pageInfo.classList.add('visible');
    }
}

// Open zoom modal
function openZoom(photoId, tab) {
    const photo = albumsData[tab].find(p => p.id === photoId);
    if (!photo) return;

    currentPhoto = photo;
    currentZoomLevel = 1;

    const modal = document.getElementById('zoomModal');
    const img = document.getElementById('zoomImage');
    const title = document.getElementById('zoomTitle');
    const desc = document.getElementById('zoomDescription');

    img.src = photo.src;
    title.textContent = photo.title;
    desc.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
    img.classList.remove('zoomed');

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Navigate to previous photo in zoom
function prevPhoto() {
    const photos = albumsData[currentTab];
    const currentIndex = photos.findIndex(p => p.id === currentPhoto.id);
    if (currentIndex > 0) {
        const prevPhoto = photos[currentIndex - 1];
        openZoom(prevPhoto.id, currentTab);
    }
}

// Navigate to next photo in zoom
function nextPhoto() {
    const photos = albumsData[currentTab];
    const currentIndex = photos.findIndex(p => p.id === currentPhoto.id);
    if (currentIndex < photos.length - 1) {
        const nextPhoto = photos[currentIndex + 1];
        openZoom(nextPhoto.id, currentTab);
    }
}

// Close zoom modal
function closeZoom() {
    const modal = document.getElementById('zoomModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    currentPhoto = null;
    currentZoomLevel = 1;
}

// Update zoom level
function updateZoom() {
    const img = document.getElementById('zoomImage');
    img.style.transform = `scale(${currentZoomLevel})`;
    if (currentZoomLevel > 1) {
        img.classList.add('zoomed');
    } else {
        img.classList.remove('zoomed');
    }
}

// Toggle zoom on image click
document.getElementById('zoomImage').addEventListener('click', () => {
    if (currentZoomLevel === 1) {
        currentZoomLevel = 2;
    } else {
        currentZoomLevel = 1;
    }
    updateZoom();
});

// Download/save photo
function downloadPhoto(src, title, tab) {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${title}-${tab}.jpg`;
    link.target = '_blank';

    // For cross-origin images, use fetch
    fetch(src)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.download = `${title}-${tab}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        })
        .catch(error => {
            // Fallback: open in new tab
            window.open(src, '_blank');
        });
}

// Music controls
function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.className = 'fas fa-play';
        musicStatus.textContent = 'Paused';
        musicPlayer.classList.remove('playing');
        localStorage.setItem('musicPlaying', 'false');
    } else {
        bgMusic.play().catch(err => {
            console.log('Autoplay prevented:', err);
        });
        musicIcon.className = 'fas fa-pause';
        musicStatus.textContent = 'Playing';
        musicPlayer.classList.add('playing');
        localStorage.setItem('musicPlaying', 'true');
    }
    isPlaying = !isPlaying;
}

// Auto play music when page loads
function autoPlayMusic() {
    bgMusic.volume = 0.5;

    // Try to autoplay regardless of localStorage state
    bgMusic.play().then(() => {
        musicIcon.className = 'fas fa-pause';
        musicStatus.textContent = 'Playing';
        musicPlayer.classList.add('playing');
        isPlaying = true;
        localStorage.setItem('musicPlaying', 'true');
    }).catch(err => {
        console.log('Autoplay prevented:', err);
        // If autoplay failed, check localStorage
        if (isPlaying) {
            musicIcon.className = 'fas fa-pause';
            musicStatus.textContent = 'Playing';
            musicPlayer.classList.add('playing');
        } else {
            musicIcon.className = 'fas fa-play';
            musicStatus.textContent = 'Paused';
        }
    });
}

// Event listeners for zoom controls
document.getElementById('zoomClose').addEventListener('click', closeZoom);
document.getElementById('zoomPrev').addEventListener('click', prevPhoto);
document.getElementById('zoomNext').addEventListener('click', nextPhoto);
document.getElementById('zoomSave').addEventListener('click', () => {
    if (currentPhoto) {
        downloadPhoto(currentPhoto.src, currentPhoto.title, currentTab);
    }
});

// Close zoom on background click
document.getElementById('zoomModal').addEventListener('click', (e) => {
    if (e.target.id === 'zoomModal') {
        closeZoom();
    }
});

// Close zoom on ESC key, navigate with arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeZoom();
    } else if (e.key === 'ArrowLeft') {
        prevPhoto();
    } else if (e.key === 'ArrowRight') {
        nextPhoto();
    }
});

// Music player toggle
musicPlayer.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
});

// Initialize search
function initializeSearch() {
    const searchBox = document.getElementById('searchBox');

    if (searchBox) {
        // Search on input with debounce
        let debounceTimer;
        searchBox.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchPhotos(e.target.value);
            }, 300);
        });

        // Search on Enter key
        searchBox.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchPhotos(searchBox.value);
            }
        });
    }
}

// Tab functionality
function initializeTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

// Theme Toggle
function initializeThemeToggle() {
    const toggleBtn = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');

    if (!toggleBtn || !modeIcon) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.documentElement.setAttribute('data-theme', 'light');
        modeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.add('dark-mode');
        document.documentElement.removeAttribute('data-theme');
        modeIcon.className = 'fas fa-moon';
    }

    toggleBtn.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';

        if (isLight) {
            document.body.classList.add('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            modeIcon.className = 'fas fa-moon';
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            modeIcon.className = 'fas fa-sun';
        }
    });
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('toggle');
        navMenu.classList.toggle('nav-active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('toggle');
            navMenu.classList.remove('nav-active');
        });
    });
}

// Scroll Effects (navbar shadow, etc.)
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Smooth scrolling for internal links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');
            if (navToggle && navMenu) {
                navToggle.classList.remove('toggle');
                navMenu.classList.remove('nav-active');
            }
        });
    });
}

// Trigger fade animations
function triggerAnimations(tab) {
    const photoCards = document.querySelectorAll(`#tab-${tab} .photo-card`);
    const batchSize = 6;

    photoCards.forEach((card, index) => {
        const delay = Math.floor(index / batchSize) * 100 + (index % batchSize) * 50;
        setTimeout(() => {
            card.classList.add('visible');
        }, Math.min(delay, 300));
    });

    const pagination = document.getElementById(`pagination-${tab}`);
    const pageInfo = document.getElementById(`pageInfo-${tab}`);

    if (pagination) {
        setTimeout(() => pagination.classList.add('visible'), 150);
    }
    if (pageInfo) {
        setTimeout(() => pageInfo.classList.add('visible'), 100);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize first tab
    renderPhotos(currentTab, currentPages[currentTab]);
    autoPlayMusic();
    initializeThemeToggle();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeSmoothScrolling();
    initializeSearch();
    initializeTabs();

    // Trigger initial animations
    setTimeout(() => {
        triggerAnimations(currentTab);
    }, 300);
});
