var type = new Typed(".multiple-text", {
    strings: ["Catalysts of Innovation.", "Architects of Digital Excellence.", "Pioneers in Transformative Technology.",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
function rearrangeElements() {
    const aboutSection = document.getElementById('about');
    const aboutContent = document.querySelector('.about-content');
    const aboutImg = document.querySelector('.about-img');

    if (window.innerWidth <= 600) {

        aboutSection.insertBefore(aboutImg, aboutContent);
    } else {

        aboutSection.insertBefore(aboutContent, aboutImg);
    }
}


window.addEventListener('load', rearrangeElements);
window.addEventListener('resize', rearrangeElements);

