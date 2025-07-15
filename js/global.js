//fonction du thème//

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    links.forEach(links => {
        links.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile();


/* Portfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.grid__portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const showProjets = (elem) => {
        projets.forEach(projet => {
            let filter = projet.getAttribute('data-category');

            if (elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }

            if (filter !== elem) {
                projet.parentNode.classList.add('hide');
            } else {
                projet.parentNode.classList.remove('hide');
            }
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter)
        });
    })

}

tabsFilters();

function showProjetsDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close')

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();

            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    })

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        });
    })

}

showProjetsDetails();