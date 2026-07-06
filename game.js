window.onload = () => {

    // =====================
    // ELEMENTS
    // =====================

    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");

    const game1 = document.getElementById("game1");
    const game2 = document.getElementById("game2");
    const finalPage = document.getElementById("finalPage");

    const colors = document.querySelectorAll(".color");
    const dropZone = document.getElementById("dropZone");
    const colorsBox = document.getElementById("colors");

    const checkBtn = document.getElementById("checkBtn");
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    const retryBtn = document.getElementById("retryBtn");

    const answer = document.getElementById("answer");
    const unlockBtn = document.getElementById("unlockBtn");
    const lockMsg = document.getElementById("lockMsg");
    const lockBox = document.getElementById("lockBox");



    // =====================
    // START GAME
    // =====================

    startBtn.onclick = () => {
        intro.classList.add("hidden");
        game1.classList.remove("hidden");
    };



    // =====================
    // MOVE COLORS (CLICK)
    // =====================

    colors.forEach(color => {
        color.onclick = () => {
            dropZone.appendChild(color);
        };
    });



    // =====================
    // CHECK PUZZLE 1
    // =====================

    checkBtn.onclick = () => {

        const order = [...dropZone.children]
            .map(el => el.classList[1]) // blue pink yellow purple
            .join("");

        if (order === "bluepinkyellowpurple") {

            success.classList.remove("hidden");
            fail.classList.add("hidden");

            setTimeout(() => {
                game1.classList.add("hidden");
                game2.classList.remove("hidden");
            }, 1000);

        } else {

            success.classList.add("hidden");
            fail.classList.remove("hidden");
        }
    };



    // =====================
    // RETRY
    // =====================

    retryBtn.onclick = () => {

        success.classList.add("hidden");
        fail.classList.add("hidden");

        while (dropZone.firstChild) {
            colorsBox.appendChild(dropZone.firstChild);
        }
    };



    // =====================
    // PUZZLE 2
    // =====================

    unlockBtn.onclick = () => {

        const value = answer.value.trim();

        if (value === "سلسبيلتك روحك حياتك مولاتك عمرك") {

            lockMsg.innerText = "Unlocked ❤️";
            document.querySelector(".lock").textContent = "🔓";

            setTimeout(() => {
                game2.classList.add("hidden");
                finalPage.classList.remove("hidden");
            }, 1000);

        } else {

            lockMsg.innerText = "Wrong ❌ Try again";

            lockBox.classList.add("shake");

            setTimeout(() => {
                lockBox.classList.remove("shake");
            }, 800);
        }
    };

};