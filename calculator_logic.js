const DATA = {
    neptuHari: { "Minggu": 5, "Senin": 4, "Selasa": 3, "Rabu": 7, "Kamis": 8, "Jumat": 6, "Sabtu": 9 },
    neptuPasaran: { "Legi": 5, "Pahing": 9, "Pon": 7, "Wage": 4, "Kliwon": 8 },
    shio: ["Monyet", "Ayam", "Anjing", "Babi", "Tikus", "Kerbau", "Macan", "Kelinci", "Naga", "Ular", "Kuda", "Kambing"],
    elemen: ["Logam", "Logam", "Air", "Air", "Kayu", "Kayu", "Api", "Api", "Tanah", "Tanah"],
    zodiac: [
        { name: "Capricorn", start: [12, 22], end: [1, 19], planet: "Saturnus", icon: "fa-capricorn" },
        { name: "Aquarius", start: [1, 20], end: [2, 18], planet: "Uranus", icon: "fa-aquarius" },
        { name: "Pisces", start: [2, 19], end: [3, 20], planet: "Neptunus", icon: "fa-pisces" },
        { name: "Aries", start: [3, 21], end: [4, 19], planet: "Mars", icon: "fa-aries" },
        { name: "Taurus", start: [4, 20], end: [5, 20], planet: "Venus", icon: "fa-taurus" },
        { name: "Gemini", start: [5, 21], end: [6, 20], planet: "Merkurius", icon: "fa-gemini" },
        { name: "Cancer", start: [6, 21], end: [7, 22], planet: "Bulan", icon: "fa-cancer" },
        { name: "Leo", start: [7, 23], end: [8, 22], planet: "Matahari", icon: "fa-leo" },
        { name: "Virgo", start: [8, 23], end: [9, 22], planet: "Merkurius", icon: "fa-virgo" },
        { name: "Libra", start: [9, 23], end: [10, 22], planet: "Venus", icon: "fa-libra" },
        { name: "Scorpio", start: [10, 23], end: [11, 21], planet: "Pluto", icon: "fa-scorpio" },
        { name: "Sagitarius", start: [11, 22], end: [12, 21], planet: "Jupiter", icon: "fa-sagittarius" }
    ]
};

function getWeton(date) {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const pasaran = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];
    const refDate = new Date(1994, 4, 15); // 15 May 1994 (Month is 0-indexed)
    const diffTime = date.getTime() - refDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let dayIdx = (0 + (diffDays % 7) + 7) % 7;
    let pasIdx = (0 + (diffDays % 5) + 5) % 5;
    
    return {
        hari: days[dayIdx],
        pasaran: pasaran[pasIdx],
        neptu: DATA.neptuHari[days[dayIdx]] + DATA.neptuPasaran[pasaran[pasIdx]]
    };
}

function getShio(date) {
    const year = date.getFullYear();
    const shioName = DATA.shio[year % 12];
    const elemenName = DATA.elemen[year % 10];
    return `${shioName} ${elemenName}`;
}

function getZodiac(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    for (let z of DATA.zodiac) {
        if ((month === z.start[0] && day >= z.start[1]) || (month === z.end[0] && day <= z.end[1])) {
            return z;
        }
    }
    return DATA.zodiac[0]; // Default Capricorn
}
