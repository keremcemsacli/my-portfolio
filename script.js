// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", function() {
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Kullanıcı scroll yaptıkça düğmenin görünürlüğünü kontrol edelim
window.addEventListener("scroll", function() {
// Sayfa 300 piksel aşağı indiğinde düğmeyi gösterelim
if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
} else {
    scrollToTopBtn.style.display = "none";
}
});

// Düğmeye tıklanınca sayfayı yavaşça en yukarı kaydıralım
scrollToTopBtn.addEventListener("click", function() {
scrollToTop();
});

// Yavaşça en yukarı kaydırma işlevi
function scrollToTop() {
var scrollStep = -window.scrollY / 15; // her adımda 15 bölüm halinde kaydır
var scrollInterval = setInterval(function(){
    if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
    } else {
        clearInterval(scrollInterval);
    }
}, 15); // her 15 milisaniyede bir adım atla
}
});


function setLanguage(lang) {
document.documentElement.setAttribute('lang', lang);
document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
});
localStorage.setItem('language', lang);
updateLangButton(lang);
}

function updateLangButton(lang) {
const button = document.getElementById('lang-switch');
button.innerHTML = `<img src="images/${lang === 'tr' ? 'eng' : 'tr'}.jpg" class="h-10 rounded-lg">`;
}

document.addEventListener('DOMContentLoaded', () => {
const savedLang = localStorage.getItem('language') || 'tr';
setLanguage(savedLang);

document.getElementById('lang-switch').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    setLanguage(currentLang === 'tr' ? 'en' : 'tr');
});
});

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const langSwitch = document.getElementById('lang-switch');
  
  function toggleMenu() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('menu-open');
  }
  
  mobileMenuButton.addEventListener('click', function(event) {
      event.stopPropagation();
      toggleMenu();
  });
  
  document.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && 
          event.target !== mobileMenuButton && 
          event.target !== langSwitch) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('menu-open');
          mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
  });
  
  mobileMenu.addEventListener('click', function(event) {
      event.stopPropagation();
  });
  
  langSwitch.addEventListener('click', function(event) {
      event.stopPropagation();
  });
  
  // Klavye navigasyonu için
  mobileMenuButton.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleMenu();
      }
  });
  
  // ESC tuşu ile menüyü kapatma
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          toggleMenu();
      }
  });
});