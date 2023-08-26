const card = document.querySelectorAll(".panel");

card.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  card.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// For loop method
//  for (let i = 0; i < card.length; i++) {
// card[i].addEventListener("click", () => {
//     card[i].classList.toggle("active");
// });
//  }
