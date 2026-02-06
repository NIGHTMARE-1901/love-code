function sayYes() {
  document.getElementById("question").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("message").classList.remove("hidden");
}

/* Floating hearts generator */

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);

/* NO button runs away */

window.onload = function () {

    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", () => {

        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });

};

