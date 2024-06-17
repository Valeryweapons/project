"use strict"

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


function checkTest(testId, rightAnswers) {
    let inputs = document.querySelectorAll(`#${testId} input`);
    let i = 0;
    for (let input of inputs) {
        if (input.value.toLowerCase() == rightAnswers[i].toLowerCase()) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
        i++;
    }
}

// Встановлюємо обробник події для кнопок
document.querySelector('#button1').addEventListener('click', function() {
    checkTest('test1', ['Ciebie', 'Niego', 'Nimi', 'Mnie', 'Niej', 'Nami', 'Niego', 'Nią', 'Jej', 'Nami']);
});

document.querySelector('#button2').addEventListener('click', function() {
    checkTest('test2', ['Nich', 'Jej', 'Je', 'Was', 'Was', 'Nimi', 'Ciebie', 'Mnie', 'Tobie', 'Mnie']);
});

document.querySelector('#button3').addEventListener('click', function() {
    checkTest('test3', ['Ciebie', 'Go', 'Go', 'Ciebie', 'Mi', 'Mi', 'Mu', 'Tobie', 'Jemu', 'Tobie']);
});

//Стрілка для меню
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) { // Оголошення змінної i за допомогою let
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function() {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('on');
        });
    }
} else {
    body.classList.add('mouse');
}


// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener('click', function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
