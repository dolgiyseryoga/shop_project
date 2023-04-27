//div внутри корзины, в котором мы добовляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

//добовляю прослушку на всем окне
window.addEventListener('click', function(event) {

//проверяем клик строго по кнопкам = или -
if(event.target.hasAttribute('data-cart')){
    //находим карточку с товаром, внутри которй был клик
    const card = event.target.closest('.card');

    //собираем данные с этого товара и записываем их в единый обьект productinfo
    const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
    };

    //проверем есть ли в корзине такой товар
    const itemInCart =  cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

    //если  товар есть в корзине
    if(itemInCart) {
        const counterElement = itemInCart.querySelector('[data-counter]');
        counterElement.innerText = parseInt(counterElement.innerText)+parseInt(productInfo.counter);
    } else {
    //если товара нет в корзине

//собранные данные подставляем в шаблон для товара в корзине
    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
            <!-- cart-item__details -->
            <div class="cart-item__details">
                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>
                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>
            </div>
            <!-- // cart-item__details -->
        </div>
    </div>
</div>`;

//отобразим товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
//сбрасываем счетчик товара после добавления в корзину
    card.querySelector('[data-counter]').innerText = '1';

    //отображение статуса корзины. пустая или полная
    toogleCartStatus();

    //пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();

}
});