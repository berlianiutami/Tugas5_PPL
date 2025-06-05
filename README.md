##KELOMPOK -6 
Anggota :
- Berliani Utami (2208107010082)
- Raihan Firyal (2208107010084)
- Riska Haqika Situmorang (2208107010086)
  
# Api Sederhana dengan AdonisJS
Ini adalah proyek tugas PPL berupa **API sederhana** yang dibangun dengan [AdonisJS] dan menyimpan data ke dalam **MySQL**. API ini bisa digunakan untuk menampilkan dan menambahkan data bertema tertentu, misalnya **Komik**, **Karakter**, dan sebagainya.

## Fitur Utama

| Method | Endpoint     | Deskripsi                            |
|--------|--------------|--------------------------------------|
| GET    | /items       | Menampilkan semua data item          |
| GET    | /items/:id   | Menampilkan satu item berdasarkan ID |
| POST   | /items       | Menambahkan item baru (via Postman)  |

---

##  Struktur Data

Setiap item memiliki minimal 3 atribut, contoh:
```json
{
  "id": 1,
  "title": "Naruto",
  "genre": "Action",
  "author": "Masashi Kishimoto"
}


