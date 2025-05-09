const button = document.getElementById("mode-toggle");
const body = document.body;

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

   
    if (body.classList.contains("dark-mode")) {
        button.textContent = "☀️ 라이트 모드";
    } else {
        button.textContent = "🌙 다크 모드";
    }
});
