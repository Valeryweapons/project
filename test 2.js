"use strict"
//Визначення пристрою, на якому переглядається веб-сторінка
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

//Цикл для перевірки тестів 

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

//Відповіді до тестів 
document.querySelector('#button1').addEventListener('click', function() {
    checkTest('test1', ['Mieszkają','Macie','Zwiedza','Czytamy','Czekam','Mieszka','Mam','Czytasz','Mamy','Zwiedzacie' ]);
});

document.querySelector('#button2').addEventListener('click', function() {
    checkTest('test2', ['Dba','Czekam','Kochasz','Pamiętam','Rzuca się ','Wprowadzam','Rozciągam się',
    'Pomagam','pomaga','Spędzacie','spędzamy','Wracam','Zachwycam się','Składa','Dokucza','Otwieracie','Pobiera']);
});


//Стрілка для меню
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) {
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
