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
    button.textContent = 'Add';
    button.value = games.id;
    span.appendChild(button);

    li.appendChild(span);
    return (li);
}