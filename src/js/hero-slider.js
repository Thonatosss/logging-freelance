document.addEventListener("DOMContentLoaded", function () {
    var images = [
        "./src/images/hero/heroImg.jpg",
        "./src/images/hero/hero-second.jpg"
    ]; // Масив з посиланнями на зображення

    var currentIndex = 0;
    var imgElement = document.querySelector(".hero-section");

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        
        setTimeout(function () {
            imgElement.style.backgroundImage = "url('" + images[currentIndex] + "')";
        
        }, 1000); // Затримка, щоб зображення встигло зникнути перед заміною
    }

    setInterval(changeBackground, 5000); // Час затримки між змінами зображень (у мілісекундах)
});