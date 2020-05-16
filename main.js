const next = document.querySelector('.next'),
      prev = document.querySelector('.prev'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlider = (n) => {
   for(slide of slides) {
      slide.classList.remove('active');
   }
   slides[n].classList.add('active');
}

const activeDots = (n) => {
   for(dot of dots) {
      dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

const nextSlide = () => {
   if (index == slides.length - 1) {
      index = 0;
   } else {
      index++;
   }
   activeSlider(index);
   activeDots(index);   
}

const prevSlide = () => {
   if (index == 0) {
      index = slides.length - 1;
   } else {
      index--;
   }
   activeSlider(index);
   activeDots(index);   
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


dots.forEach((item, i) => {
   item.addEventListener('click', () => {
      activeSlider(i);
      activeDots(i);     
   })   
})
