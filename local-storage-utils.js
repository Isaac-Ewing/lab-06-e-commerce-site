import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    const string = localStorage.getItem(CART);
    if (string) {
        const cart = JSON.parse(string);
        return (cart);
    }
    return ([]);
}

export function setCart(item) {
    const cart = JSON.stringify(item);

    localStorage.setItem(CART, cart);
}

export function addItemToCart(Id) {
    const cart = getCart();
    const item = findById(cart, Id);
    if (item)
        item.quantity++;
    else {
        const newItem = {
            id: Id,
            quantity: 1,
        };
        cart.push(newItem);
    }
    setCart(cart);
}