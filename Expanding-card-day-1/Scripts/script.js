const card = document.querySelectorAll(".panel");
 

card.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActicClass();
        panel.classList.add("active");
    })
})

function removeActicClass() {
    card.forEach(panel => {
        panel.classList.remove("active")
    })
}







                                // For loop method 
//  for (let i = 0; i < card.length; i++) {
// card[i].addEventListener("click", () => {
//     card[i].classList.toggle("active");
// });
//  }