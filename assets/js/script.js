function handler(event){
    alert("Тип события: " + event.type);

    alert("Элемент, на котором возникло событие: " + event.target);

    if(event.bubbles) {
        alert('Событие возникло на вложенном элементе')
    } else {
        alert('Событие возникло не на вложенном элементе')
    }
    
    alert("Событие прикреплено к: " +event.currentTarget);

    alert("Стадия обработки события: " + event.eventPhase);
    
    alert("Время возникновения события: " + event.timeStamp);

}

const cursor = document.querySelector('.wrapper__item-cursor');
const draggableElement = document.querySelector('.draggable');
const dropzone = document.querySelector('.wrapper__item-zone');
const element = document.querySelector('.wrapper__item-mobil');

element.addEventListener('touchstart', (event) => {
  alert('Началось касание');
});   


cursor.addEventListener('pointerenter', (event) => {
    alert('Указатель вошел в пределы элемента', event);
});

draggableElement.addEventListener('dragstart', event => {
  alert('Началось перетаскивание объекта')
});

draggableElement.addEventListener('drag', event => {
    draggableElement.style.display = 'none'
});

dropzone.addEventListener('dragover', event => {
    dropzone.classList.add('active-zone')
});

dropzone.addEventListener('dragleave', event => {
    setTimeout(() => {
        dropzone.classList.remove('active-zone')
    },500)
  });

var inputElement = document.querySelector('.input_key');

inputElement.addEventListener('input', function(event) {
  alert('Введено:'+ event.target.value);
});

document.addEventListener('keydown', function(event) {
    alert('Нажата кнопка:' + event.key);
});

document.addEventListener('keyup', function(event) {
    alert('Отпущена кнопка:' + event.key);
});

document.addEventListener('keypress', function(event) {
    alert('Зажата кнопка:' + event.key);
});

var rect = document.getElementById("event");
rect.addEventListener("click", handler);

const clickBtn = document.querySelector('.click__button')
const mouseDownBtn = document.querySelector('.mouseDown__button')
const mouseUp = document.querySelector('.mouseUp__button')
const mouseOver = document.querySelector('.mouseOver__button')
const mouseOut = document.querySelector('.mouseOut__button')



clickBtn.addEventListener('click', clickToBtn)
mouseDownBtn.addEventListener('mousedown', mousedownbtn)
mouseUp.addEventListener('mouseup', mouseUpBtn)
mouseOver.addEventListener('mouseover', overMouseBtn)
mouseOut.addEventListener('mouseout', overOutBtn)


function clickToBtn() {
    alert("Ты кликнул")
}

function  overMouseBtn() {
    alert("Мышь над блоком")
}

function  overOutBtn() {
    alert("Мышь вне блока")
}

function mousedownbtn() {
    alert("Сработал mousedown")
}

function mouseUpBtn() {
    alert("Вы отпустили кнопку с мыши")
}

