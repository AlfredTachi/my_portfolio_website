// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

// change theme
let themeDots = document.getElementsByClassName('theme-dot');

for(var i = 0;  themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked: ', mode);
    })
}

function setTheme(mode){
    if(mode  == 'light'){
        document.getElementById('theme-style').href = 'main.css';
    }

    if(mode  == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }

    if(mode  == 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }

    if(mode  == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }
}