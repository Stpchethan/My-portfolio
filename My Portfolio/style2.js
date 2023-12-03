let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let  id = sec.getAttribute('id');


if( top >= offset  && top < offset + height ){
navLinks.forEach(links => {

links.class.remove('active');
document.querySelector('header nav a[href*= '+ id + ']').classList.add('active');

});



};




    });


    Let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    












};
















































