const burger = document.querySelector('.burger');
const aside = document.querySelector('aside');

//for menu's interval
let indexLetter = 0;
const time = 200;
let active = true;
let addLetter;

//animation on About me
const anim1 = document.querySelector('.anim1');
const anim2 = document.querySelector('.anim2');
let index1 = 0;
let index2 = 0;
const board1 = ['anim/1/anim1_1.svg', 'anim/1/anim1_2.svg', 'anim/1/anim1_3.svg', 'anim/1/anim1_4.svg'];
const board2 = ['anim/2/anim2_1.svg', 'anim/2/anim2_2.svg', 'anim/2/anim2_3.svg', 'anim/2/anim2_4.svg', 'anim/2/anim2_5.svg'];


// interval

const typing = () => {
    const tab = ["About me  ", "Portfolio ", "Contact me"];
    if (indexLetter < tab[0].length) {
        const li1 = document.querySelector('.li1');
        const li2 = document.querySelector('.li2');
        const li3 = document.querySelector('.li3');
        li1.innerHTML += tab[0][indexLetter];
        li2.innerHTML += tab[1][indexLetter];
        li3.innerHTML += tab[2][indexLetter];
        indexLetter++;
    }
    else {
        indexLetter = 0;
        clearInterval(addLetter);
    }
}


//listener on click

//show menu
const showMenu = () => {
    burger.classList.toggle('active');
    aside.classList.toggle('on');
}

//add interval to type menu's letters

const addInterval = () => {
    if (active == false) {
        const div = document.querySelectorAll('li a div');
        div.forEach(item => item.textContent = "");
        return active = true;
    }
    else if (active == true) {
        addLetter = setInterval(typing, time);
        active = false;
    }
}


//Animation on page About me

const goAnimation1 = () => {
    if (index1 < board1.length) {
        anim1.style.backgroundImage = `url(${board1[index1]})`;
        index1++
    }
    else index1 = 0;
}

const goAnimation2 = () => {
    if (index2 < board2.length) {
        anim2.style.backgroundImage = `url(${board2[index2]})`;
        index2++
    }
    else index2 = 0;
}




const animation1 = setInterval(goAnimation1, 400);
const animation2 = setInterval(goAnimation2, 500);



const showScroll = () => {
    const fas = document.querySelector('.fa-angle-down');
    let windowTop = window.scrollY;
    if (windowTop >= 100) {
        fas.style.opacity = "0";
    }
    else {
        fas.style.opacity = "1";
    }
}

// add listener on click to menu
burger.addEventListener('click', showMenu)
burger.addEventListener('click', addInterval)
window.addEventListener('scroll', showScroll)


