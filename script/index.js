//Variables Declarations
const prevButton = document.querySelector('.button__prev');
const nextButton = document.querySelector('.button__next');
const tanyaTestimonial = document.querySelector('.tanya');
const johnTestimonial = document.querySelector('.john')

prevButton.addEventListener('click', (e) => {
    tanyaTestimonial.classList.toggle('hide');
    johnTestimonial.classList.toggle('hide');

    e.preventDefault();
})

nextButton.addEventListener('click', (e) => {
    tanyaTestimonial.classList.toggle('hide');
    johnTestimonial.classList.toggle('hide');

    e.preventDefault();
})
