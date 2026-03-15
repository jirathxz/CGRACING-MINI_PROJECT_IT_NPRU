window.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentPath = window.location.pathname;

    if (isLoggedIn == null) {
        localStorage.setItem("isLoggedIn", "false");
    }

    if (isLoggedIn !== "true") {

        const nav_page = document.getElementById("nav_page");
        if (nav_page) {
            nav_page.style.display = "none";
        }

        console.log("ระบบ: ไม่ได้ล็อกอิน");

        if (currentPath !== "/CGRACING-MINI_PROJECT_IT_NPRU/login.html" && currentPath !== "/CGRACING-MINI_PROJECT_IT_NPRU/register.html") {
            console.log("ไม่อนุญาตให้เข้าถึงหน้า: " + currentPath + " กำลังพากลับไปหน้าเข้าสู่ระบบ...");
            window.location.href = "/CGRACING-MINI_PROJECT_IT_NPRU/login.html";
        }
    } else { 
        if (currentPath == "/CGRACING-MINI_PROJECT_IT_NPRU/login.html" || currentPath == "/CGRACING-MINI_PROJECT_IT_NPRU/register.html") {
            window.location.href = "/CGRACING-MINI_PROJECT_IT_NPRU/index.html";
        }
    }
});
