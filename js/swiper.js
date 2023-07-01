const swiperAboutEl = document.querySelector('.swiper');
const swiperReviewEl = document.querySelector('.swiper-review');

if (swiperAboutEl && swiperReviewEl) {

  const swiper = new Swiper('.swiper', {
    speed: 400,
  allowSlideNext: true,
  allowSlidePrev: true,
    // loop: true,
  autoplay: {
    delay: 5000,
  },
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
    // loop: true,
    autoplay: {
      delay: 5000,
    },
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

  window.addEventListener("load", swiperStopFn);

  function swiperStopFn (){
      if (!swiper.autoplay.paused ) {
        
        swiper.autoplay.pause();

      }
      if (!swiperReview.autoplay.paused) {
        
        swiperReview.autoplay.pause();

      }

  }

  // function swiperStatus () {
  //   console.log('about paused: ' + swiper.autoplay.paused);
  //   console.log('review paused: ' + swiperReview.autoplay.paused);
  // }

  // setInterval(swiperStatus, 2000);

  const swiperIntersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };
  
  const swiperObserverAbout = new IntersectionObserver(() => {
    if (swiper.autoplay.paused) {  
      swiper.autoplay.resume();
      setTimeout(swiper.autoplay.pause, 60000);
    }
  }, swiperIntersectionOptions);
  
  const swiperObserverReview = new IntersectionObserver(() => {

    if (swiperReview.autoplay.paused) {
      swiperReview.autoplay.resume();
      setTimeout(swiperReview.autoplay.pause, 60000);
    }
  }, swiperIntersectionOptions);

swiperObserverAbout.observe(swiperAboutEl);
swiperObserverReview.observe(swiperReviewEl);


}