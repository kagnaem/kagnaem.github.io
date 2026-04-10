const buttons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const visible = filter === "all" || tags.includes(filter);
      card.style.display = visible ? "flex" : "none";
    });
  });
});
