# 📡 API Sederhana dengan AdonisJS


Proyek ini merupakan tugas dari mata kuliah **Praktikum PPL** yang dikembangkan oleh **Kelompok 6**. API ini dibangun menggunakan [AdonisJS](https://adonisjs.com/) dan berfungsi untuk **menampilkan dan menambahkan data** bertema tertentu (misalnya: Komik, Karakter, Buku, dan lainnya) ke dalam database **MySQL**.

---

## 👥 Anggota Kelompok 6

| Nama                    | NIM           |
| ----------------------- | ------------- |
| Berliani Utami          | 2208107010082 |
| Raihan Firyal           | 2208107010084 |
| Riska Haqika Situmorang | 2208107010086 |

---

## 🚀 Fitur Utama

API ini menyediakan beberapa endpoint dasar untuk manipulasi data:

| Method | Endpoint     | Deskripsi                            |
| ------ | ------------ | ------------------------------------ |
| GET    | `/items`     | Menampilkan semua data item          |
| GET    | `/items/:id` | Menampilkan satu item berdasarkan ID |
| POST   | `/items`     | Menambahkan item baru (via Postman)  |

---

## 🧱 Struktur Data

Setiap item memiliki minimal 3 atribut. Contoh struktur data item:

```json
{
  "id": 1,
  "title": "Naruto",
  "genre": "Action",
  "author": "Masashi Kishimoto"
}
```

> ✅ Catatan: Struktur ini dapat dimodifikasi sesuai kebutuhan, misalnya untuk data buku, karakter game, film, dan lainnya.

---

## ⚙️ Teknologi yang Digunakan

* [AdonisJS](https://adonisjs.com/) (Node.js framework)
* Node.js (versi terbaru)
* MySQL / phpMyAdmin
* Postman (untuk testing endpoint)
* VS Code
* Git + GitHub

---

## 📦 Cara Menjalankan Proyek

1. Clone repository:

   ```bash
   git clone (https://github.com/berlianiutami/Tugas5_PPL.git)
   cd NAMA-REPO
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` dan sesuaikan koneksi database:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=api_sederhana
   ```

4. Jalankan migration (jika menggunakan migration AdonisJS):

   ```bash
   node ace migration:run
   ```

5. Jalankan server lokal:

   ```bash
   node ace serve --watch
   ```

6. Akses API melalui Postman di URL:
   `http://127.0.0.1:3333/items`

---

## 📝 Catatan Tambahan

* Pastikan MySQL aktif dan database sudah dibuat sebelum menjalankan proyek.
* Endpoint POST bisa diuji menggunakan Postman dengan konten JSON.
* proyek ini hanya menyediakan layanan API.

---

## 📄 Lisensi

Proyek ini bersifat open-source dan bebas digunakan untuk pembelajaran.

