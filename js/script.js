const track      = document.querySelector('#track');
const slides     = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const slideWidth = slides[0].getBoundingClientRect().width;

//arange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = (slideWidth * index) + 24 * index + 'px';
};
slides.forEach(setSlidePosition);

//moving the slide 
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//click prev
prevButton.addEventListener('click', e => {
    const currentSlide  = track.querySelector('.current-slide');
    const prevSlide     = currentSlide.previousElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);
});

//cick next
nextButton.addEventListener('click', e => {
    const currentSlide  = track.querySelector('.current-slide');
    const nextSlide     = currentSlide.nextElementSibling;

    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
    
});


// menu toglle 

const menuButton = document.querySelector('.menu-block');
const menuButtonSm = document.querySelector('.menu-block-sm');
const menuIcon = document.querySelector('.menu-button');
const menuLine = Array.from(menuIcon.children);
const menuShow = document.querySelector('.menu-show');
const menuShowWhite = document.querySelector('.menu-show-white');
let toggle = 0;

function toggleMenu() {
    toggle++;
    if(toggle === 1 ){
        menuLine[0].style.transform = 'translateY(2px) rotate(45deg)';
        menuLine[1].style.transform = 'translateY(-3px) rotate(-45deg)';
        menuLine[2].style.display = 'none';
        menuShow.style.display = 'block';
        menuShow.classList.add('menu-transition-right');
        menuShow.classList.remove('menu-transition-left');
        menuShowWhite.style.display = 'block';
        menuShowWhite.classList.add('menu-transition-right');
        menuShowWhite.classList.remove('menu-transition-left');
    }
    if(toggle === 2){
        menuShow.classList.remove('menu-transition-right');
        menuShow.classList.add('menu-transition-left');
        menuShowWhite.classList.remove('menu-transition-right');
        menuShowWhite.classList.add('menu-transition-left');
        menuLine[2].style.display = 'block';
        menuLine[0].style.transform = 'translateY(0) rotate(0)';
        menuLine[1].style.transform = 'translateY(0) rotate(0)';
        setTimeout(() => {
            menuShow.style.display = 'none';
            menuShowWhite.style.display = 'none';
        },250);
        toggle = 0;
    }

}

menuButton.addEventListener('click', e =>{
    toggleMenu();
});

menuButtonSm.addEventListener('click', e =>{
    toggleMenu();
});

