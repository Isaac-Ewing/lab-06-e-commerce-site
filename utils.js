export function findById(array, id) {
    for (let item of array) {
        if (id === item.id)
            return (item);
    }
    return (null);
}

export function calcItemTotal(quantity, price) {
    return (quantity * price);
}

export function calcOrderTotal(cart, games) {
    let total = 0;
    for (let item of cart) {
        total = total + calcItemTotal(item.quantity, Number(findById(games, item.id).price));
    }
    return (total);
}