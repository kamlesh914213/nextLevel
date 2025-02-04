
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Owl Carousel
    $(".galleryCarousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Modal functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


    


