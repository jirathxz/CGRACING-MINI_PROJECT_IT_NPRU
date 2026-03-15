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

        if (!currentPath.endsWith("login.html") && !currentPath.endsWith("register.html")) {
            console.log("ไม่อนุญาตให้เข้าถึงหน้า: " + currentPath + " กำลังพากลับไปหน้าเข้าสู่ระบบ...");
            window.location.href = "login.html";
        }
    } else { 
        if (currentPath.endsWith("login.html") || currentPath.endsWith("register.html")) {
            window.location.href = "index.html";
        }
    }
});
