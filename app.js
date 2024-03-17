document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("moving-image");
    image.addEventListener("mouseenter", function() {
        this.classList.add("hovered");
    });
    image.addEventListener("mouseleave", function() {
        this.classList.remove("hovered");
    });
});
