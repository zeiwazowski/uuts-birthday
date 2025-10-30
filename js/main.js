const password = "";
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

function checkPassword() {
    const input = document.getElementById("password").value;
    const lock = document.querySelector(".lock");

    if (input === password) {
        lock.classList.add("open");
        setTimeout(() => {
            nextPage("i");
            playMusic();
        }, 1000);
    } else {
        alert("Duh, coba lagi yaa!");
    }
}

function nextPage(id) {
    document
        .querySelectorAll("section")
        .forEach((sec) => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function playMusic() {
    music
        .play()
        .then(() => {
            isPlaying = true;
            musicBtn.textContent = "🔊";
        })
        .catch((err) => {
            console.log("Autoplay diblokir, tunggu interaksi user dulu:", err);
        });
}

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.textContent = "🔇";
    } else {
        music.play();
        musicBtn.textContent = "🔊";
    }
    isPlaying = !isPlaying;
}

// 🍰 Tiup lilin
const flame = document.querySelector("#i .flame");
const hint = document.querySelector("#i .hint");

if (flame) {
    flame.addEventListener("click", () => {
        flame.classList.add("off");
        hint.textContent = "Hooo~ Lilinnya padam 💛";
        setTimeout(() => {
            hint.textContent = "Semoga semua harapanmu menyala lebih terang 🌻";
            setTimeout(() => {
                nextPage("m");
            }, 3000);
        }, 3000);
    });
}

// 🎁 Buka kado
const giftBox = document.querySelector("#m .gift-box");
const scrapbook = document.querySelector("#m .scrapbook");

if (giftBox) {
    giftBox.addEventListener("click", () => {
        console.log("Gift box clicked");
        giftBox.classList.add("open");
        setTimeout(() => {
            scrapbook.classList.add("show");
        }, 1200);
    });
}

if (scrapbook) {
    scrapbook.addEventListener("click", () => {
        console.log("Scrapbook clicked");
        scrapbook.classList.add("open");
        setTimeout(() => nextPage("a"), 1000);
    });
}
