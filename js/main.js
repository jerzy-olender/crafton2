document.addEventListener("DOMContentLoaded", () => {
  let page = 1;
  const loadBtn = document.querySelector(".load-more");
  const itemsContainer = document.querySelector(".real-estates .items");

  if (loadBtn && itemsContainer) {
    loadBtn.addEventListener("click", () => {
      page++;

      fetch("ajax/load-guides.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "page=" + page
      })
        .then(res => res.text())
        .then(data => {
          if (data.trim() !== "") {
            itemsContainer.insertAdjacentHTML("beforeend", data);
          } else {
            // zamiast ukrywać przycisk – zmieniamy jego treść
            loadBtn.textContent = "Nie ma więcej poradników";
            loadBtn.disabled = true; // blokuje dalsze klikanie
            loadBtn.classList.add("disabled"); // opcjonalnie klasa do stylowania
          }
        })
        .catch(err => console.error("Błąd AJAX:", err));
    });
  }
});
