// Typing Effect
const typingText = document.getElementById("typing-text");
const text = "Hi! I'm a B.Tech student and passionate web developer. I create modern, responsive websites and mobile apps using Flutter.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Fade-in effect on scroll
const faders = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(fade => {
    const fadeTop = fade.getBoundingClientRect().top;
    if (fadeTop < triggerBottom) {
      fade.classList.add('show');
    }
  });
}
window.addEventListener('scroll', checkFade);
checkFade();

// EmailJS Contact Form Integration
// Load EmailJS from CDN in HTML: 
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
(function() {
  emailjs.init(FwewK8h7BELmFZI35); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = this;
  const status = document.getElementById("form-status");

  emailjs.sendForm(service_0n2gzqs, template_5k3wygp, form)
    .then(() => {
      status.innerHTML = "✅ Message Sent Successfully!";
      status.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "❌ Failed to Send. Please try again.";
      status.style.color = "red";
      console.error("EmailJS Error:", error);
    });
});
