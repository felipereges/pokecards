const body = document.querySelector("body");
const buttonSwitchTheme = document.getElementById("button-switch-theme");
const imgButtonSwitchTheme = document.querySelector(".theme-button");

buttonSwitchTheme.addEventListener("click", () => {
        const darkThemeInUse = body.classList.contains("dark-theme");

        body.classList.toggle("dark-theme");

        if (darkThemeInUse) {
                imgButtonSwitchTheme.setAttribute("src", "./src/images/solrock.png")
        } else {
                imgButtonSwitchTheme.setAttribute("src", "./src/images/lunatone.png")
        }
})

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
                        buttonSwitchSprite.style.position = "relative";
                        sparkleImg.style.imageRendering = "pixelated";
                        sparkleImg.classList.add("sparkle-image");

                        buttonSwitchSprite.appendChild(sparkleImg);

                        setTimeout(() => {
                                buttonSwitchSprite.removeChild(sparkleImg);
                        }, 1000);

                        pokemonImg[i - 1].setAttribute("src", `./src/images/${i}-shiny.gif`);
                        pokemonImg[i - 1].style.imageRendering = "pixelated";
                        pokemonImg[i - 1].style.imageRendering = "smooth";
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

const playHomeAudio = document.getElementById("play-home-audio");
const homeAudio = document.getElementById("home-audio");

playHomeAudio.addEventListener("click", () => {
        homeAudio.volume = 0.4;
        homeAudio.play();
});

window.onscroll = function () {
        scrollFunction();
};

function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("toTop").style.display = "block";
        } else {
                document.getElementById("toTop").style.display = "none";
        }
}

function toTopFunction() {
        const scrollToTop = document.documentElement || document.body;
        scrollToTop.scrollIntoView({ behavior: "smooth" });
}
