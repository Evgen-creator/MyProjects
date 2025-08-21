const slider = document.querySelector('.slider'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    slides = document.querySelectorAll('.slider-img'),
    bottom = document.querySelector('.bottom')

let currentSlideIndex = 0
const paginationCircles = []
let slideWidth = slider.clientWidth

window.addEventListener('resize', () => {
    slideWidth = slider.clientWidth
    showSlide()
})

function createPaginations() {
    const div = document.createElement('div')
    div.classList.add('pagination-circle')
    bottom.appendChild(div)
    paginationCircles.push(div)
}

function addPaginations() {
    slides.forEach(createPaginations)
    paginationCircles[0].classList.add('activeSlide')
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => changeSlider(index))
    })
}

function addActiveSliderClass() {
    paginationCircles[currentSlideIndex].classList.add('activeSlide')
}

function removeActiveSliderClass() {
    paginationCircles[currentSlideIndex].classList.remove('activeSlide')
}

function changeSlider(sliderIndex) {
    removeActiveSliderClass()
    currentSlideIndex = sliderIndex
    addActiveSliderClass()
    showSlide()
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`
    slider.style.transition = `all 0.3s ease-in-out`
}

function nextSlide() {
    let newSliderindex = currentSlideIndex + 1
    if (newSliderindex >= slides.length) {
        newSliderindex = 0
    }
    changeSlider(newSliderindex)
}

function prevSlide() {
    let newSliderindex = currentSlideIndex - 1
    if (newSliderindex < 0) {
        newSliderindex = slides.length - 1
    }
    changeSlider(newSliderindex)
}


addPaginations()
arrowLeft.addEventListener('click', prevSlide)
arrowRight.addEventListener('click', nextSlide)
