import { renderGames } from './render-games.js';
import games from '../data/games.js';

const ul = document.getElementById('games');

for (const i of games) {
    const add = renderGames(i);
    ul.appendChild(add);
}