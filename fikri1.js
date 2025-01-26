// Fungsi untuk menangani klik tombol dan mengubah teks
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const paragraph = document.querySelector('p');
    const title = document.querySelector('h1');

    // Ketika tombol diklik, ubah teks paragraf
    button.addEventListener('click', () => {
        paragraph.textContent = "Terima kasih telah mengklik tombol!";
        paragraph.style.color = "#4CAF50"; // Mengubah warna teks setelah tombol diklik
        paragraph.style.fontWeight = "bold"; // Menambah ketebalan font
    });

    // Menambahkan animasi pada judul setelah halaman dimuat
    title.addEventListener('animationend', () => {
        title.style.color = "#45a049"; // Mengubah warna setelah animasi selesai
    });
});
