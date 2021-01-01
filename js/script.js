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
const menuIconSm = document.querySelector('.menu-button-sm');

const menuLine = Array.from(menuIcon.children);
const menuLineSm = Array.from(menuIconSm.children);

const menuShow = document.querySelector('.menu-show');
const menuShowWhite = document.querySelector('.menu-show-white');
let toggle = 0;

function toggleMenu(menuLine) {
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
    toggleMenu(menuLine);
});

menuButtonSm.addEventListener('click', e =>{
    toggleMenu(menuLineSm);
});

// form validation
const subject       = document.querySelector('.subject');
const email         = document.querySelector('.email');
const message       = document.querySelector('.message');
const submitButton  = document.querySelector('.btnSend');   
const warningText   = document.querySelector('.waring-text');   
const successText   = document.querySelector('.success-text');   

subject.addEventListener('focusout', (event) => {
    checkValue(event);
});

email.addEventListener('focusout', (event) => {
    checkValue(event);
});

message.addEventListener('focusout', (event) => {
    checkValue(event);
});

function checkValue(value){
    if(value.target.value == ''){
        value.target.style.borderColor = '#EF4444';
        value.target.classList.add('text-red-placeholder');
    }else{
        value.target.style.borderColor = '#3B82F6';
        value.target.classList.remove('text-red-placeholder');
        value.target.classList.remove('placeholder-red-400::placeholder');
    }
}

submitButton.addEventListener('click', () => {
    if(subject.value != '' && email.value != '' && message.value != ''){
        successText.style.display = 'block';
        warningText.style.display = 'none';
    }else{
        successText.style.display = 'none';
        warningText.style.display = 'block';
    }
});

//smooth scroll 

const scroll = new SmoothScroll('.navigation a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});


const topBtn = document.querySelector(".topBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}


