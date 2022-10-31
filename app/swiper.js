var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  parallax: true,
  spaceBetween: 70
});
// pagination-button-disabled
const prevSlideButton = document.getElementById('pagination-button-prev');
const nextSlideButton = document.getElementById('pagination-button-next');

prevSlideButton.addEventListener('click', ()=>{
  nextSlideButton.classList.remove('pagination-button-disabled');
  swiper.slideTo(swiper.activeIndex - 1);
  swiper.activeIndex === 0 ? prevSlideButton.classList.add('pagination-button-disabled') : '';
})
nextSlideButton.addEventListener('click', ()=>{
  prevSlideButton.classList.remove('pagination-button-disabled');
  swiper.slideTo(swiper.activeIndex + 1);
  swiper.activeIndex + 1 === swiper.slides.length ? nextSlideButton.classList.add('pagination-button-disabled') : '';
})

swiper.on('slideChange', () => {
  if(swiper.activeIndex === 0){
    prevSlideButton.classList.add('pagination-button-disabled');
    nextSlideButton.classList.remove('pagination-button-disabled');
  } else if(swiper.activeIndex + 1 === swiper.slides.length){
    nextSlideButton.classList.add('pagination-button-disabled')
    prevSlideButton.classList.remove('pagination-button-disabled');
  } else {
    prevSlideButton.classList.remove('pagination-button-disabled');
    nextSlideButton.classList.remove('pagination-button-disabled');
  }
});