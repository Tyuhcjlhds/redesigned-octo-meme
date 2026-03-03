// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// WhatsApp automatic notification on form submission
const form = document.getElementById('mentorForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const fullname = form.fullname.value.trim();
  const province = form.province.value.trim();
  const commune = form.commune.value.trim();
  const phone = form.phone.value.trim();
  const mentorship = form.mentorship.value.trim();

  // Message format
  const message = `Bonjour Jaguar,\nNouvelle demande de mentorat reçue :\nNom : ${fullname}\nProvince : ${province}\nCommune : ${commune}\nTéléphone : ${phone}\nType de mentorat : ${mentorship}`;

  // WhatsApp link
  const whatsappNumber = "25772408703"; // Ton numéro WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, "_blank");

  // Confirmation à l'utilisateur
  alert("Merci! Votre demande a été envoyée via WhatsApp / Your request has been sent via WhatsApp.");

  // Reset form
  form.reset();
});