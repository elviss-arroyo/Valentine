const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

let noScale = 1;

yesBtn.addEventListener("click", () => {
  response.textContent = "thanks pookie ill give you alot of gil 💚";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  noScale -= 0.15;

  if (noScale <= 0.1) {
    noBtn.style.display = "none";
  } else {
    noBtn.style.transform = `scale(${noScale})`;
  }
});
