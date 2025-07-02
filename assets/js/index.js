const date=Date.now();
document.getElementById("year").textContent=" "+new Date(date).getFullYear();

document.getElementsByClassName("nav-link").forEach((link) => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".nav-link").forEach((el) => {
            el.classList.remove("active");
        });
        this.classList.add("active");
    });
});
