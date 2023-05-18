const body = document.querySelector("body");
const buttonSwitchTheme = document.getElementById("button-switch-theme");
const imgButtonSwitchTheme = document.querySelector(".theme-button");

buttonSwitchTheme.addEventListener("click", () => {
        const darkThemeInUse = body.classList.contains("dark-theme");

        body.classList.toggle("dark-theme");

        if (darkThemeInUse) {
                imgButtonSwitchTheme.setAttribute("src", "./src/images/sun.png")
        } else {
                imgButtonSwitchTheme.setAttribute("src", "./src/images/moon.png")
        }
})

window.addEventListener('DOMContentLoaded', function () {
        var audio = document.getElementById('meuAudio');
        audio.volume = 0.4;
        audio.play();
});

const pokemonImg = document.querySelectorAll(".gif-xs, .gif-s, .gif-m, .gif-b, .gif-xb, .gif-ekans, .gif-charmeleon");

for (let i = 1; i <= 26; i++) {
        const buttonSwitchSprite = document.getElementById(`button-switch-sprite-${i}`);

        buttonSwitchSprite.addEventListener("click", () => {
                const spriteInUse = body.classList.contains(`./src/images/${i}.gif`);

                body.classList.toggle(`./src/images/${i}.gif`);

                if (spriteInUse) {
                        pokemonImg[i - 1].setAttribute("src", `./src/images/${i}.gif`);
                } else {
                        const audio = new Audio("./src/audio/Shiny Sparkle Sound Effect Generation 3.mp3");
                        audio.play();

                        const sparkleImg = document.createElement("img");
                        sparkleImg.src = "./src/images/sparkle.gif";
                        sparkleImg.style.position = "absolute";
                        sparkleImg.style.width = "100%";
                        sparkleImg.style.height = "100%";
                        sparkleImg.style.top = "0";
                        sparkleImg.style.left = "0";
                        buttonSwitchSprite.style.position = "relative";

                        buttonSwitchSprite.appendChild(sparkleImg);

                        setTimeout(() => {
                                buttonSwitchSprite.removeChild(sparkleImg);
                        }, 1000);

                        pokemonImg[i - 1].setAttribute("src", `./src/images/${i}-shiny.gif`);
                }
        });
}

for (let i = 1; i <= 26; i++) {
        const selector = "body #button-switch-sprite-" + i;

        const element = document.querySelector(selector);
        if (element) {
                element.style.background = "none";
                element.style.border = "none";
                element.style.cursor = "pointer";
        }
}
