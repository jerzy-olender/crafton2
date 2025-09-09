document.addEventListener("DOMContentLoaded", () => {
  let page = 1;
  const loadBtn = document.querySelector(".load-more");
  const itemsContainer = document.querySelector(".real-estates .items");

  if (!loadBtn || !itemsContainer) return;

  loadBtn.addEventListener("click", () => {
    page += 1;
    loadBtn.disabled = true;
    const prevText = loadBtn.textContent;
    loadBtn.textContent = "Ładowanie…";

    fetch("ajax/load-guides.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "page=" + page
    })
      .then(res => res.text())
      .then(data => {
        if (data.trim()) {
          itemsContainer.insertAdjacentHTML("beforeend", data);
          loadBtn.disabled = false;
          loadBtn.textContent = prevText;
        } else {
          loadBtn.textContent = "Nie ma więcej poradników";
          loadBtn.disabled = true;
          loadBtn.classList.add("disabled");
        }
      })
      .catch(err => {
        console.error("Błąd AJAX:", err);
        loadBtn.disabled = false;
        loadBtn.textContent = prevText;
      });
  });
});

// JS – toggle menu
(function () {
  const header = document.querySelector('.main-header');
  const btn = header?.querySelector('.hamburger');
  const nav = header?.querySelector('nav');

  if (!header || !btn || !nav) return;

  const openMenu = () => {
    header.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    nav.removeAttribute('hidden');
  };

  const closeMenu = () => {
    header.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    nav.setAttribute('hidden', '');
  };

  btn.addEventListener('click', () => {
    const willOpen = !header.classList.contains('is-open');
    willOpen ? openMenu() : closeMenu();
  });

  // Zamknij ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      closeMenu();
      btn.focus();
    }
  });

  // Zamknij po kliknięciu w link **lub** w .close-icon
  nav.addEventListener('click', (e) => {
    if (e.target.closest('.close-icon, a')) {
      closeMenu();
    }
  });
})();

// Wstrzyknięcie ikonki do <nav>
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.insertAdjacentHTML(
      'afterbegin',
      '<img src="images/close-icon.svg" class="img-fluid close-icon" alt="Zamknij menu">'
    );
  }
});
