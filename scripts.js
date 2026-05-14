function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

function handleForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const notif = document.getElementById('notif');

  if (!name || !email || !message) {
    notif.textContent = 'Semua kolom wajib diisi.';
    notif.style.color = '#c53030';
    return;
  }

  notif.textContent = 'Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.';
  notif.style.color = '#2f855a';
  document.querySelector('.contact-form').reset();
}

window.addEventListener('load', setYear);
