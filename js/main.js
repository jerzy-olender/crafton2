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
        console.log("=== DEBUG AJAX RESPONSE START ===");
        console.log(data);
        console.log("=== DEBUG AJAX RESPONSE END ===");

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
