// MENGAMBIL ELEMEN HTML
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("login");
const mainContent = document.getElementById("mainContent");

const loginMenu = document.getElementById("loginMenu");
const homeMenu = document.getElementById("homeMenu");
const aboutMenu = document.getElementById("aboutMenu");
const actorMenu = document.getElementById("actorMenu");
const drakorMenu = document.getElementById("drakorMenu");
const logoutMenu = document.getElementById("logoutMenu");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const emailSuccess = document.getElementById("emailSuccess");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");

// FUNGSI MENAMPILKAN HALAMAN HOME
function tampilkanHome() {
    loginPage.classList.add("d-none");
    mainContent.classList.remove("d-none");

    loginMenu.classList.add("d-none");
    homeMenu.classList.remove("d-none");
    aboutMenu.classList.remove("d-none");
    actorMenu.classList.remove("d-none");
    drakorMenu.classList.remove("d-none");
    logoutMenu.classList.remove("d-none");

    // Kembali ke bagian paling atas
    window.scrollTo(0, 0);
}

// FUNGSI KEMBALI KE LOGIN
function tampilkanLogin() {
    mainContent.classList.add("d-none");
    loginPage.classList.remove("d-none");

    loginMenu.classList.remove("d-none");
    homeMenu.classList.add("d-none");
    aboutMenu.classList.add("d-none");
    actorMenu.classList.add("d-none");
    drakorMenu.classList.add("d-none");
    logoutMenu.classList.add("d-none");

    loginForm.reset();

    emailError.textContent = "";
    emailSuccess.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";
    message.className = "mt-3";

    window.scrollTo(0, 0);
}

// VALIDASI FORM LOGIN
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Hapus pesan sebelumnya
    emailError.textContent = "";
    emailSuccess.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";
    message.className = "mt-3";

    let valid = true;

    // VALIDASI EMAIL
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        emailError.textContent = "Format email tidak valid.";
        valid = false;
    } else {
        emailSuccess.textContent = "Format email valid!";
    }

    // VALIDASI PASSWORD MINIMAL 8 KARAKTER
    if (password.length < 8) {
        passwordError.textContent =
            "Password harus minimal 8 karakter.";
        valid = false;
    }

    // JIKA SEMUA VALID
    if (valid) {
        message.textContent = "Login berhasil! Selamat datang ♡";
        message.className = "alert alert-success mt-3";

        // Beri waktu singkat untuk membaca pesan
        setTimeout(function () {
            tampilkanHome();
        }, 700);
    } else {
        message.textContent =
            "Login gagal. Periksa kembali email dan password.";
        message.className = "alert alert-danger mt-3";
    }
});

// TOMBOL LOGOUT
document.getElementById("logoutButton").addEventListener("click", function (e) {
    e.preventDefault();
    tampilkanLogin();
});

// KLIK NAMA WEBSITE
document.getElementById("brand").addEventListener("click", function (e) {
    e.preventDefault();

    if (!mainContent.classList.contains("d-none")) {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, 0);
    }
});

// DATA DETAIL DRAMA KOREA
const dataDrakor = [
    {
        judul: "Can This Love Be Translated?",
        poster: "asett/tcblt.jpg",
        tahun: "2025",
        area: "Korea Selatan dan lokasi perjalanan internasional",
        kategori: "Romantis, Komedi",
        sinopsis:
            "Seorang penerjemah multibahasa dan seorang aktris bertemu " +
            "dalam perjalanan yang membuat mereka belajar memahami " +
            "bahasa, perasaan, dan cara mencintai satu sama lain.",
        pemain: "Kim Seon Ho, Go Youn Jung"
    },
    {
        judul: "The Manipulated",
        poster: "asett/THE MANIPULATED.jpg",
        tahun: "2025",
        area: "Korea Selatan",
        kategori: "Action, Thriller, Kriminal",
        sinopsis:
            "Seorang pria mengalami kehidupan yang hancur setelah " +
            "dijebak dalam sebuah kejahatan. Ia berusaha mengungkap " +
            "kebenaran dan mencari keadilan.",
        pemain: "Ji Chang Wook, Doh Kyung Soo"
    },
    {
        judul: "Night Has Come",
        poster: "asett/night has come.jpg",
        tahun: "2023",
        area: "Lingkungan sekolah dan tempat kegiatan siswa di Korea Selatan",
        kategori: "Thriller, Misteri, Horor",
        sinopsis:
            "Sekelompok siswa SMA terjebak dalam permainan mafia " +
            "mematikan. Mereka harus mencari tahu siapa mafia di antara " +
            "mereka agar bisa bertahan hidup.",
        pemain: "Lee Jae In, Kim Woo Seok, Choi Ye Bin, " +
                "Cha Woo Min, Ahn Ji Ho"
    },
    {
        judul: "Weak Hero Class 1",
        poster: "asett/week hero.jpg",
        tahun: "2022",
        area: "Lingkungan sekolah menengah di Korea Selatan",
        kategori: "Action, Drama, Thriller, School",
        sinopsis:
            "Yeon Si Eun adalah siswa pintar yang menggunakan kecerdasan " +
            "dan strategi untuk menghadapi kekerasan di sekolah. Dalam " +
            "perjalanannya, ia membangun persahabatan yang diuji oleh " +
            "berbagai konflik dan perundungan.",
        pemain: "Park Ji Hoon, Choi Hyun Wook, Hong Kyung"
    }
];

// FUNGSI MELIHAT DETAIL
function lihatDetail(index) {
    const drama = dataDrakor[index];

    if (!drama) return;

    document.getElementById("detailPoster").src = drama.poster;
    document.getElementById("detailPoster").alt = drama.judul;
    document.getElementById("detailJudul").textContent = drama.judul;
    document.getElementById("detailTahun").textContent = drama.tahun;
    document.getElementById("detailArea").textContent = drama.area;
    document.getElementById("detailKategori").textContent = drama.kategori;
    document.getElementById("detailSinopsis").textContent = drama.sinopsis;
    document.getElementById("detailPemain").textContent = drama.pemain;

    document.getElementById("daftarDrakor").classList.add("d-none");
    document.getElementById("detailDrakor").classList.remove("d-none");

    document.getElementById("Drakor").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// FUNGSI KEMBALI KE DAFTAR DRAMA
function kembaliDrakor() {
    document.getElementById("detailDrakor").classList.add("d-none");
    document.getElementById("daftarDrakor").classList.remove("d-none");

    document.getElementById("Drakor").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}