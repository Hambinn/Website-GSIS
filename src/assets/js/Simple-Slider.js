$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var swwiperGoals = new Swiper ('.swiper-goals', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    var swiperPre = new Swiper ('.swiper-pre-event', {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });

    var swwiperGoals = new Swiper ('.swiper-video', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    
	var swiperMe = new Swiper ('.swiper-me', {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });

    var swiperFaq = new Swiper ('.swiper-faq', {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoHeight: true,        
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
    });
});