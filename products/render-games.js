import { addItemToCart } from '../local-storage-utils.js';

export function renderGames(games) {
    const li = document.createElement('li');
    li.classList.add(games.category);
    li.title = games.description;

    const image = document.createElement('img');
    image.src = `${games.image}`;
    image.style.height = '100px';
    image.style.width = '175px';
    li.appendChild(image);

    const h2 = document.createElement('h2');
    h2.textContent = games.name;
    li.appendChild(h2);

    const span = document.createElement('span');
    span.classList.add('price');
    span.textContent = `$${games.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = games.id;
    span.appendChild(button);

    const h3 = document.createElement('h3');
    h3.textContent = games.description;
    li.appendChild(h3);

    li.appendChild(span);
    button.addEventListener('click', () => {
        addItemToCart(games.id);
    });
    return (li);
}