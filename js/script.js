function slideController(){
    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');

    let currentSlide = 0;

    function hideSlider(){
        slider.forEach(item => item.classList.remove('on'));
    }
    function showSlider(){
        slider[currentSlide].classList.add('on');
    }

    function nextSlider(){
        hideSlider();
        if(currentSlide === slider.length -1){
            currentSlide = 0;
        } else {
            currentSlide ++;
        }
        showSlider();
    }

    function prevSlider(){
        hideSlider();
        if(currentSlide === 0){
            currentSlide = slider.length -1;
        }else{
            currentSlide --;
        }
        showSlider();
    }

    btnNext.addEventListener('click', nextSlider);
    btnPrev.addEventListener('click', prevSlider);
}
slideController();


var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        // clickable: true
      },
      breakpoints: {
        // when window width is >= 320px
        640: {
        slidesPerView: 1,
        spaceBetween: 18
        },
        // when window width is >= 480px
        768: {
        slidesPerView: 2,
        spaceBetween: 18
        },
        // when window width is >= 640px
        1188: {
        slidesPerView: 3,
        spaceBetween: 24
        }
  }
  });

  
function ativaLetra(elemento){
    const arrTexto =elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });

}

const digitando = document.querySelector('.digitando');

ativaLetra(digitando);