// IMPORT MODULES under test here:
import { renderGames } from '../products/render-games.js'
// import { example } from '../example.js';

const test = QUnit.test;

QUnit.module('Render Game');

test('render', (expect) => {
    //Arrange
    const Spelunky2 = {
        id: 'Spelunky2',
        name: 'Spelunky 2',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/418530/capsule_616x353.jpg?t=1608620216',
        description: 'A game that makes you hate yourself',
        category: 'Rouge-like',
        price: '30'
    };
    // Set up your arguments and expectations
    const expected = "<li class=\"Rouge-like\" title=\"A game that makes you hate yourself\"><img src=\"https://cdn.cloudflare.steamstatic.com/steam/apps/418530/capsule_616x353.jpg?t=1608620216\" style=\"height: 100px; width: 175px;\"><h2>Spelunky 2</h2><h3>A game that makes you hate yourself</h3><span class=\"price\">$30<button value=\"Spelunky2\">Add to Cart</button></span></li>";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderGames(Spelunky2);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});

test('render', (expect) => {
    const Valheim = {
        id: 'valheim',
        name: 'Valheim',
        image: 'https://images.squarespace-cdn.com/content/v1/5e203941ee6ea226e307532c/1612260136935-HEXYGD6GIJ1SNZ5WCZGI/ke17ZwdGBToddI8pDm48kAIua_kSKNK6jBaG8AUq4Ih7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0uZ4nTVmo-7CsBThMahHfB0BoGS5mHGJvCx-swYOZ3mVCkNZWN7tJPeKIX099Fba3A/Valheim+Keyart+Squad+enjoying+the+vista.png?format=2500w',
        description: 'Like Minecraft, but less to do and you are vikings',
        category: 'Survival',
        price: '20'
    };
    const expected = "<li class=\"Survival\" title=\"Like Minecraft, but less to do and you are vikings\"><img src=\"https://images.squarespace-cdn.com/content/v1/5e203941ee6ea226e307532c/1612260136935-HEXYGD6GIJ1SNZ5WCZGI/ke17ZwdGBToddI8pDm48kAIua_kSKNK6jBaG8AUq4Ih7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0uZ4nTVmo-7CsBThMahHfB0BoGS5mHGJvCx-swYOZ3mVCkNZWN7tJPeKIX099Fba3A/Valheim+Keyart+Squad+enjoying+the+vista.png?format=2500w\" style=\"height: 100px; width: 175px;\"><h2>Valheim</h2><h3>Like Minecraft, but less to do and you are vikings</h3><span class=\"price\">$20<button value=\"valheim\">Add to Cart</button></span></li>";
    const dom = renderGames(Valheim);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('render', (expect) => {
    const AmongUs = {
        id: 'amongus',
        name: 'Among Us',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/945360/capsule_616x353.jpg?t=1611793703',
        description: 'Lie to everyone',
        category: 'Deception',
        price: '5'
    };
    const expected = "<li class=\"Deception\" title=\"Lie to everyone\"><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/945360/capsule_616x353.jpg?t=1611793703\" style=\"height: 100px; width: 175px;\"><h2>Among Us</h2><h3>Lie to everyone</h3><span class=\"price\">$5<button value=\"amongus\">Add to Cart</button></span></li>";
    const dom = renderGames(AmongUs);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('render', (expect) => {
    const Stellaris = {
        id: 'stellaris',
        name: 'Stellaris',
        image: 'https://fanatical.imgix.net/product/original/eef0ed9c-ff32-48d7-8416-2c087feb54fb.jpg?auto=compress,format&w=400&fit=max',
        description: 'Take over the galaxy, fight other alien races',
        category: 'Grand-Strategy',
        price: '40'
    };
    const expected = '<li class=\"Grand-Strategy\" title=\"Take over the galaxy, fight other alien races\"><img src=\"https://fanatical.imgix.net/product/original/eef0ed9c-ff32-48d7-8416-2c087feb54fb.jpg?auto=compress,format&amp;w=400&amp;fit=max\" style=\"height: 100px; width: 175px;\"><h2>Stellaris</h2><h3>Take over the galaxy, fight other alien races</h3><span class=\"price\">$40<button value=\"stellaris\">Add to Cart</button></span></li>';
    const dom = renderGames(Stellaris);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('render', (expect) => {
    const Phasmophobia = {
        id: 'phasmophobia',
        name: 'Phasmophobia',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/capsule_616x353.jpg?t=1613740031',
        description: 'Hunt ghosts with friends',
        category: 'Horror',
        price: '30'
    };
    const expected = '<li class=\"Horror\" title=\"Hunt ghosts with friends\"><img src=\"https://cdn.cloudflare.steamstatic.com/steam/apps/739630/capsule_616x353.jpg?t=1613740031\" style=\"height: 100px; width: 175px;\"><h2>Phasmophobia</h2><h3>Hunt ghosts with friends</h3><span class=\"price\">$30<button value=\"phasmophobia\">Add to Cart</button></span></li>';
    const dom = renderGames(Phasmophobia);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});