// 1. Membuat objek kosong 
var objek_kosong = {};

// 2. Membuat objek dengan properti (object Literal)
var mobil = {
    "warna-badan" : "merah",
    "nomor-polisi" : "BK1234AB",
    "jumlah_roda" : 4
}; 

// 3. Membuat objek bersarang (Nested Object)
var jadwal = {
    platform: 34,
    tujuan: {
        kode_kota: "JKT",
        nama_kota: "Jakarta"
    }
};// Wahyu Bagus Setiawan 2311102296

console.log("Warna Mobil: " + mobil["warna-badan"]);
console.log("Kota Tujuan: " + jadwal.tujuan.nama_kota);