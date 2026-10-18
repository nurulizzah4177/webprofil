document.getElementById("loginForm").addEventListener("submit", function(e) {
e.preventDefault();

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;

const emailError = document.getElementById("emailError");
const emailSuccess = document.getElementById("emailSuccess");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");

emailError.textContent = "";
emailSuccess.textContent = "";
passwordError.textContent = "";
message.textContent = "";

let valid = true;

// Validasi email
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
emailError.textContent = "Format email tidak valid.";
valid = false;
} else {
emailSuccess.textContent = "Email berhasil divalidasi!";
}

// Validasi password
if (password.length < 8) {
passwordError.textContent = "Password kurang dari 8 karakter.";
valid = false;
}

// Hasil login
if (valid) {
message.textContent = "Berhasil login!";
message.className = "alert alert-success mt-3";
} else {
message.textContent = "Validasi gagal. Periksa kembali input kamu.";
message.className = "alert alert-danger mt-3";
}
});