import { calcItemTotal } from '../utils.js';

const test = QUnit.test;

QUnit.module('Item Total');

test('calc', (expect) => {
    expect.equal(calcItemTotal(5, 5), 25);
});