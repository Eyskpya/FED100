
// --- Naoufal en Chatgpt ---
// --- Hamburger menu behavior ---
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('header nav')
menuToggle.addEventListener('click', () => {
	const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!expanded));
	primaryNav.classList.toggle('closed');
});

// Close when clicking outside
document.addEventListener('click', (e) => {
	if (!primaryNav.contains(e.target) && !menuToggle.contains(e.target)) {
		menuToggle.setAttribute('aria-expanded', 'false');
		primaryNav.classList.remove('open');
	}
});

// Close on Escape
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		menuToggle.setAttribute('aria-expanded', 'false');
		primaryNav.classList.remove('open');
		menuToggle.focus();
	}
});

// --- Met behulp van Chatgpt ---
const output = document.getElementById("outputText");

document.getElementById("btn1").addEventListener("click", () => {
  output.textContent = "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.";
});

document.getElementById("btn2").addEventListener("click", () => {
  output.textContent = "If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.";
});

// --- Met behulp van Chatgpt ---
const image = document.getElementById("soundImage");
  const audio = document.getElementById("myAudio");

  image.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });

  // --- Met behulp van Chatgpt ---
  const box = document.querySelector('.box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
    } else {
      entry.target.classList.remove('visible'); 
    }
  });
});

observer.observe(box);
