// dark / light mode toggle + basic interactions

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("themeToggle");
    const icon = toggle ? toggle.querySelector("i") : null;

    // apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light");
        if (icon) icon.className = "fa-solid fa-sun";
    }

    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("light");
            const isLight = body.classList.contains("light");
            localStorage.setItem("theme", isLight ? "light" : "dark");
            if (icon) icon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
        });
    }

    // set year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // fake form submit message
    const fakeBtn = document.getElementById("fakeSubmit");
    if (fakeBtn) {
        fakeBtn.addEventListener("click", () => {
            alert("Thank you! This is a demo form in the portfolio and is not connected to a server.");
        });
    }
});
