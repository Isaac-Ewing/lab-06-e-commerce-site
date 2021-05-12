import { findById } from '../utils.js';

const test = QUnit.test;

QUnit.module('Find By ID');

test('find', (expect) => {
    const cart = [
        {
            id: '1',
            quantity: '2',
        },
        {
            id: '2',
            quantity: '3',
        }
    ];

    const actual = findById(cart, '2').quantity;
    expect.equal(actual, '3');
});