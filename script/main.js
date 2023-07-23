document.querySelectorAll('.open').addEventListener('click', toggleHamburger)

function toggleHamburger() {
    document.getElementsByClassName('nav').classList.toggle('open');
    document.getElementsByClassName('menu').classList.toggle('open');

}

