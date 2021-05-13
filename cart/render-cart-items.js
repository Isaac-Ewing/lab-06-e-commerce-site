import { findById } from '../utils.js';

export function renderCartItem(item, games) {
    const game = findById(games, item.id);

    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantity = document.createElement('td');
    const price = document.createElement('td');
    const total = document.createElement('td');

    nameTd.textContent = game.name;
    quantity.textContent = item.quantity;
    const t = Number(game.price) * item.quantity;
    total.textContent = '$' + `${Number(t)}`;
    price.textContent = '$' + game.price;
    tr.append(nameTd, quantity, price, total);
    return (tr);
}
