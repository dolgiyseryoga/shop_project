//добовляю прослушку на всем окне
window.addEventListener('click', function(event) {
//объявляем переменную для счетчика
let counter;
//проверяем клик строго по кнопкам = или -
if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
//находим обвертку счетчика
    const counterWrapper =  event.target.closest('.counter-wrapper');
//находим div с числом счетчика
    counter =  counterWrapper.querySelector('[data-counter]')
}
//проверяем является ли элемент по которому мы кликнули кнопкой плюс 
    if (event.target.dataset.action === 'plus'){
        counter.innerText =  ++counter.innerText;
    }
//проверяем является ли элемент по которому мы кликнули кнопкой минус 
    if (event.target.dataset.action === 'minus'){
        //проверяем чтобы счетчик был больше 1
        if(parseInt(counter.innerText) > 1){
        counter.innerText =  --counter.innerText;
        }
    }
});