import { renderCartItem } from './render-cart-items.js';
import cartItems from '../cart-items.js';
import { calcItemTotal, findById } from '../utils.js';
import games from '../data/games.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

let totalPrice = 0;

for (let item of cartItems) {
    const tableRow = renderCartItem(item, games);

    totalPrice = totalPrice + calcItemTotal(item.quantity, Number(findById(games, item.id).price));
    anchor.append(tableRow);
}

total.textContent = `${totalPrice}`;