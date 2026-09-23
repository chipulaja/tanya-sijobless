const modal = document.getElementById("modal");
const totalDisplay = document.getElementById("total-display");
const resultText = document.getElementById("result");

function openPay() {
  modal.classList.add("open");
  resultText.textContent = "";
}

function closePay() {
  modal.classList.remove("open");
}

function applyPromo() {
  const code = document.getElementById("promo").value.trim().toUpperCase();

  if (code === "MISKIN" || code === "JOBLESS") {
    totalDisplay.textContent = "Rp0";
    resultText.textContent = "✓ Promo 'Sama-sama susah' berhasil diterapkan. Bayar pakai doa aja.";
    resultText.style.color = "#1a1206";
  } else {
    totalDisplay.textContent = "Rp49.000";
    resultText.textContent = code ? "Promo tidak ditemukan. Hidup memang kejam." : "Masukkan kode promo dulu, bang.";
    resultText.style.color = "#e63946";
  }
}

function fakePay() {
  resultText.textContent = "Pembayaran gagal. Sistem pembayaran kami juga sedang down. Coba lagi besok, atau lebih baik tidur saja.";
  resultText.style.color = "#e45b35";

  const checkout = document.querySelector(".checkout");
  checkout.classList.remove("shake");
  void checkout.offsetWidth;
  checkout.classList.add("shake");
}

// Tutup modal jika klik di area gelap (luar card)
modal.addEventListener("click", (e) => {
  if (e.target === modal) closePay();
});

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePay();
});