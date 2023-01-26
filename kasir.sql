-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Jan 2023 pada 05.07
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kasir`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_kasir`
--

CREATE TABLE `data_kasir` (
  `id_kasir` int(11) NOT NULL,
  `nama_kasir` varchar(300) NOT NULL,
  `status_kasir` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_kasir`
--

INSERT INTO `data_kasir` (`id_kasir`, `nama_kasir`, `status_kasir`) VALUES
(1, 'yasmin', 'tidak aktif'),
(2, 'frisya', 'aktif'),
(3, 'meisya', 'tidak aktif'),
(4, 'riera', 'aktif'),
(5, 'nanda', 'tidak aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `nama_menu` varchar(300) NOT NULL,
  `kategori` varchar(300) NOT NULL,
  `harga_menu` int(100) NOT NULL,
  `stok` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `menu`
--

INSERT INTO `menu` (`id_menu`, `nama_menu`, `kategori`, `harga_menu`, `stok`) VALUES
(1, 'nasi padang', 'makanan', 17000, 10),
(2, 'nasi goreng', 'makanan', 10000, 10),
(3, 'bakso', 'makanan', 5000, 5),
(4, 'jus alpukat', 'minuman', 8000, 10),
(5, 'jus jeruk', 'minuman', 7000, 10),
(6, 'jus melon', 'minuman', 7000, 10),
(7, 'es teh', 'minuman', 3000, 10),
(8, 'es jeruk', 'minuman', 3000, 10),
(9, 'jeruk hangat', 'minuman', 2000, 10);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id_pelanggan` int(11) NOT NULL,
  `nama_pelanggan` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pelanggan`
--

INSERT INTO `pelanggan` (`id_pelanggan`, `nama_pelanggan`) VALUES
(1, 'carolina rahmanti'),
(2, 'dara kania damanik'),
(3, 'indira alisya'),
(4, 'felisitas griselda'),
(5, 'aurelia kusuma dewi');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_kasir`
--
ALTER TABLE `data_kasir`
  ADD PRIMARY KEY (`id_kasir`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indeks untuk tabel `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id_pelanggan`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_kasir`
--
ALTER TABLE `data_kasir`
  MODIFY `id_kasir` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `pelanggan`
--
ALTER TABLE `pelanggan`
  MODIFY `id_pelanggan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
