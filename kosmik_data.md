# Data Riset Kosmik

## Struktur Tabel (Berdasarkan Gambar)
- **Header**: Tanggal Lahir, Shio (Elemen), Zodiak (Planet), Weton, Neptu.
- **Baris**:
  0. Esensi Neptu
  1. Peran Utama
  2. Kecocokan Tinggi (Chemistry)
  3. Potensi Gesekan Konflik
  4. Sifat Alami Hubungan
  5. Dinamika Hubungan
  6. Bisnis Hubungan 💼
  6a. Gabungan Bisnis
  7. Karakteristik
  8. Keuntungan
  9. Kelemahan
  10. Cara Menambal Kekurangan

## Data Perhitungan (Referensi Umum)

### Neptu Hari
- Minggu: 5
- Senin: 4
- Selasa: 3
- Rabu: 7
- Kamis: 8
- Jumat: 6
- Sabtu: 9

### Neptu Pasaran
- Legi: 5
- Pahing: 9
- Pon: 7
- Wage: 4
- Kliwon: 8

### Shio & Elemen (Siklus 12 tahun, Elemen berubah tiap 2 tahun)
- Tikus, Kerbau, Macan, Kelinci, Naga, Ular, Kuda, Kambing, Monyet, Ayam, Anjing, Babi.
- Elemen: Logam (akhir tahun 0,1), Air (2,3), Kayu (4,5), Api (6,7), Tanah (8,9).

### Zodiak & Planet Penguasa
- Aries: Mars
- Taurus: Venus
- Gemini: Merkurius
- Cancer: Bulan
- Leo: Matahari
- Virgo: Merkurius
- Libra: Venus
- Scorpio: Pluto/Mars
- Sagitarius: Jupiter
- Capricorn: Saturnus
- Aquarius: Uranus/Saturnus
- Pisces: Neptunus/Jupiter

## Logika Implementasi
1. Fungsi `getWeton(date)`: Menghitung pasaran Jawa berdasarkan referensi tanggal (misal: 1 Jan 1900 adalah Senin Wage).
2. Fungsi `getShio(year)`: Menghitung shio dan elemen berdasarkan tahun lunar.
3. Fungsi `getZodiac(date)`: Menentukan zodiak dan planet berdasarkan rentang tanggal.
4. Fungsi `generateComparison(people)`: Mengambil data karakteristik berdasarkan kombinasi data di atas.
