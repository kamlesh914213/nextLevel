
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let header = document.querySelector(".main-header");

    if (window.scrollY > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// ---------------sidebar-js---------------------------------
function openNav() {
    const sidePanel = document.getElementById("mySidepanel");

    if (window.innerWidth <= 992) {
        sidePanel.style.right = "0%";
    } else {
        sidePanel.style.right = "79%";
    }
}

function closeNav() {
    document.getElementById("mySidepanel").style.right = "100%";
}


// ======================= ourService carousel =======================

$(document).ready(function () {
    $('.ourService-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="./assets/images/next-btn-carousel.svg" alt="Previous" class="custom-prev-icon">',
            '<img src="./assets/images/pre-btn-carousel.svg" alt="Next" class="custom-next-icon">'],
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 4, autoWidth: true,
            },
        }
    });

    // ====================== galleryCarousel ============================
    $('.galleryCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3

            },
            1200: {
                items: 4,
            },
        }
    });
});

$(document).ready(function () {
    var silder = $(".testimonial-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 10,
        dots: false,
        navText: ['<img src="./assets/images/next-btn-carousel.svg" alt="Previous" class="custom-prev-icon">',
            '<img src="./assets/images/pre-btn-carousel.svg" alt="Next" class="custom-next-icon">'],
        nav: true,
        loop: true,
        responsive: {
            0: { items: 1, autoWidth: true },
            768: { items: 2, autoWidth: true },
            991: { items: 3, autoWidth: true },
            1200: { items: 4, autoWidth: true }
        }
    });
});


// ============= readmore button ================
document.querySelectorAll('.read-more-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const text = button.previousElementSibling;
        const dots = text.querySelector('.dots');
        const moreText = text.querySelector('.more');

        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            dots.style.display = "none";
            button.textContent = "Read less";
        } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            button.textContent = "Read more";
        }
    });
});

