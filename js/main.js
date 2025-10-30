const PASSWORD = "1208";

const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

// Check Password
function checkPassword() {
    const input = document.getElementById("password").value;
    const lock = document.querySelector(".lock");

    if (input === PASSWORD) {
        lock.classList.add("open");
        setTimeout(() => {
            nextPage("i");
            playMusic();
        }, 1000);
    } else {
        alert("Duh, salah nih! Coba lagi yaa 💛");
        document.getElementById("password").value = "";
    }
}

// Enter key support
document.getElementById("password").addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkPassword();
});

// Navigate Pages
function nextPage(id) {
    document
        .querySelectorAll("section")
        .forEach((sec) => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Flip Page with animation
function flipPage(id) {
    const currentSection = document.querySelector("section.active");
    const currentPage = currentSection.querySelector(".scrapbook-page");
    
    if (currentPage) {
        currentPage.classList.add("flipping-out");
        setTimeout(() => {
            currentSection.classList.remove("active");
            document.getElementById(id).classList.add("active");
        }, 800);
    } else {
        currentSection.classList.remove("active");
        document.getElementById(id).classList.add("active");
    }
}

// Music Control
function playMusic() {
    // Placeholder - tambahkan audio element jika ada file musik
    isPlaying = true;
    musicBtn.textContent = "🔊";
}

function toggleMusic() {
    if (isPlaying) {
        musicBtn.textContent = "🔇";
    } else {
        musicBtn.textContent = "🔊";
    }
    isPlaying = !isPlaying;
}

// 🕯️ Blow Candle
const flame = document.querySelector("#i .flame");
const candle = document.querySelector("#i .candle");
const hint = document.querySelector("#i .hint");

if (flame && candle) {
    const blowCandle = () => {
        flame.classList.add("off");
        hint.textContent = "Hooo~ Lilinnya padam 💛";

        setTimeout(() => {
            hint.textContent = "Semoga semua harapanmu menyala lebih terang 🌻";
            setTimeout(() => {
                nextPage("m");
            }, 2500);
        }, 2000);
    };

    flame.addEventListener("click", blowCandle);
    candle.addEventListener("click", blowCandle);
}

// 🎁 Open Gift Box
const giftBox = document.querySelector("#m .gift-box");
const scrapbook = document.querySelector("#m .scrapbook");

if (giftBox) {
    giftBox.addEventListener("click", () => {
        if (!giftBox.classList.contains("open")) {
            giftBox.classList.add("open");
            setTimeout(() => {
                scrapbook.classList.add("show");
            }, 800);
        }
    });
}

// 📖 Open Scrapbook
if (scrapbook) {
    scrapbook.addEventListener("click", () => {
        if (
            scrapbook.classList.contains("show") &&
            !scrapbook.classList.contains("clicked")
        ) {
            scrapbook.classList.add("clicked");
            setTimeout(() => {
                nextPage("a");
            }, 800);
        }
    });
}
