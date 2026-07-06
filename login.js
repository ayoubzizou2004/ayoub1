window.onload = () => {

    const checkBtn = document.getElementById("checkBtn");
    const enterBtn = document.getElementById("enterBtn");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    checkBtn.onclick = () => {

        if (password.value === "1234") {
            sessionStorage.setItem("logged", "true");
            message.innerText = "Correct ✅";
            enterBtn.classList.remove("hidden");

        } else {

            message.innerText = "Wrong ❌";
        }

    };

    enterBtn.onclick = () => {

        window.location.href = "ayoub.html"; // 🔥 غيّر الاسم هنا فقط

    };

};