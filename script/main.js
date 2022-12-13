// ACTIVE LINK


function scrollActive() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 240;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('nav__link--active');
        }
        else {
            document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('nav__link--active');
        }
    })
}
window.addEventListener('scroll', scrollActive);


const langages = document.getElementById('langages');
const frameworks = document.getElementById('frameworks');
const outils = document.getElementById('outils');

const btnLangages = document.getElementById('btn-langages');
const btnFrameworks = document.getElementById('btn-frameworks');
const btnOutils = document.getElementById('btn-outils');


function showLangages() {
    btnLangages.parentElement.classList.add('menu__item--active');
    btnFrameworks.parentElement.classList.remove('menu__item--active');
    btnOutils.parentElement.classList.remove('menu__item--active');
    
    langages.style.display = "flex";
    frameworks.style.display = "none";
    outils.style.display = "none";
}

function showFrameworks() {
    btnLangages.parentElement.classList.remove('menu__item--active');
    btnFrameworks.parentElement.classList.add('menu__item--active');
    btnOutils.parentElement.classList.remove('menu__item--active');

    langages.style.display = "none";
    frameworks.style.display = "flex";
    outils.style.display = "none";
}

function showOutils() {
    btnLangages.parentElement.classList.remove('menu__item--active');
    btnFrameworks.parentElement.classList.remove('menu__item--active');
    btnOutils.parentElement.classList.add('menu__item--active');

    langages.style.display = "none";
    frameworks.style.display = "none";
    outils.style.display = "flex";
}



var accordions = document.getElementsByClassName("accordion");

for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const icon = this.firstChild;
        if(!this.classList.contains("active")) {
            icon.classList.remove("bx-chevron-up");
            icon.classList.add("bx-chevron-down");
        } else {
            icon.classList.remove("bx-chevron-down");
            icon.classList.add("bx-chevron-up");
        }

        const panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
            panel.style.display = "none";
        } else {
            panel.style.display = "flex";
        }
    });
}