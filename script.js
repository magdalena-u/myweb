const burger = document.querySelector('.burger');
const aside = document.querySelector('aside');

//for menu's interval
let indexLetter = 0;
const time = 200;
let active = true;
let addLetter;

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


// add listener on click to menu
burger.addEventListener('click', showMenu)
burger.addEventListener('click', addInterval)



