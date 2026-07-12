const slides = document.querySelectorAll('.slide-sh-pics img');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current); // اولین عکس رو نشون بده
setInterval(nextSlide, 4000); // هر ۴ ثانیه عکس بعدی
