const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");

let current = 0;
const total = cards.length;

// ===============================
// تحديث المعرض
// ===============================

function updateCarousel() {

    cards.forEach((card, index) => {

        let offset = index - current;

        if (offset < -total / 2) offset += total;
        if (offset > total / 2) offset -= total;

        const x = offset * 180;
        const z = -Math.abs(offset) * 180;

        const scale = offset === 0 ? 1.2 : 0.8;
        const opacity = offset === 0 ? 1 : 0.45;

        card.style.transform =
            `translateX(${x}px)
             translateZ(${z}px)
             scale(${scale})`;

        card.style.opacity = opacity;

        card.style.zIndex = 100 - Math.abs(offset);

        card.style.filter =
            offset === 0
                ? "blur(0px)"
                : "blur(2px)";

        card.style.boxShadow =
            offset === 0
                ? "0 0 35px #ff69b4"
                : "0 0 10px rgba(255,105,180,.25)";

    });

}

updateCarousel();

// ===============================
// لوحة المفاتيح
// ===============================

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        current++;

        if (current >= total)
            current = 0;

        updateCarousel();

    }

    if (e.key === "ArrowLeft") {

        current--;

        if (current < 0)
            current = total - 1;

        updateCarousel();

    }

});

// ===============================
// السحب (الهاتف + الكمبيوتر)
// ===============================

let startX = 0;
let endX = 0;

// الهاتف

document.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;

}, { passive: true });

document.addEventListener("touchend", (e) => {

    endX = e.changedTouches[0].clientX;

    handleSwipe();

}, { passive: true });

// الكمبيوتر

document.addEventListener("mousedown", (e) => {

    startX = e.clientX;

});

document.addEventListener("mouseup", (e) => {

    endX = e.clientX;

    handleSwipe();

});

// ===============================
// معالجة السحب
// ===============================

function handleSwipe(){

    const distance = startX - endX;

    if(distance > 50){

        current++;

        if(current >= total)
            current = 0;

        updateCarousel();

    }

    if(distance < -50){

        current--;

        if(current < 0)
            current = total - 1;

        updateCarousel();

    }

}