const swiper = new Swiper('.swiper', {
    speed: 400,
  allowSlideNext: true,
  allowSlidePrev: true,
    loop: true,
  
    breakpoints: {
        // when window width is >= 320px
        375: {
          slidesPerView: 2.5,
          spaceBetween: 8
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 1.25,
          spaceBetween: 12
        },
        // when window width is >= 640px
        1440: {
          slidesPerView: 1.5,
          spaceBetween: 24
        }
    },
  });

  const swiperReview = new Swiper('.swiper-review',{
    speed: 400,
  allowSlideNext: true,
  allowSlidePrev: true,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        375: {
          slidesPerView: 2.25,
          spaceBetween: 16
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2.25,
          spaceBetween: 12
        },
        // when window width is >= 640px
        1440: {
          slidesPerView: 4,
          spaceBetween: 24
        }
    },
  })
