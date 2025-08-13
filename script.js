document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll("nav#NavBar a");
    navButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            navButtons.forEach(function(buttons) {
                buttons.style.backgroundColor = "";
                buttons.style.color = "";
            });
            this.style.backgroundColor = "brown";
            this.style.color = "white";
        });
    });
});
