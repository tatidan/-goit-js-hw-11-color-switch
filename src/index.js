//import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let timer = 0;
let intervalId = null;

function onStartBtnClick(event) {
  intervalId = setInterval(() => {
    timer += 1;
    changeColor();
    startBtn.disabled = true;
//    console.log(timer);
  }, 1000)
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  index = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[index];
}

function onStopBtnClick() {  
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
  }
//  console.log('stopped');   
}

//Напиши скрипт, который после нажатия кнопки Start,
//раз в секунду меняет цвет фона body на случайное значение из массива
//используя инлайн - стиль.При нажатии на кнопку Stop,
//изменение цвета фона должно останавливаться.

//Учти, на кнопку Start можно нажать бесконечное количество раз.
//Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

//Для генерации случайного числа(индекс элемента массива цветов),
//используй функцию randomIntegerFromInterval.
