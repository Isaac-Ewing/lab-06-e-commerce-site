import { renderCartItem } from './render-cart-items.js';
import { getCart } from '../local-storage-utils.js';
import { calcItemTotal, findById } from '../utils.js';
import games from '../data/games.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');
const orderButton = document.getElementById('button');

let totalPrice = 0;
let cartItems = getCart();

for (let item of cartItems) {
    const tableRow = renderCartItem(item, games);

    totalPrice = totalPrice + calcItemTotal(item.quantity, Number(findById(games, item.id).price));
    anchor.append(tableRow);
}

orderButton.style.opacity = 0;
total.textContent = '$' + `${totalPrice}`;
if (totalPrice > 0) {
    orderButton.style.opacity = 1;
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
    });
}