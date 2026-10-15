import { test } from 'node:test';
import assert from 'node:assert/strict';
import { escolherCombustivel } from '../src/fuel.ts';

test('mantém a regra de 70%, incluindo a fronteira', () => {
  assert.equal(escolherCombustivel(3.49, 5), 'alcool');
  assert.equal(escolherCombustivel(3.50, 5), 'alcool');
  assert.equal(escolherCombustivel(3.51, 5), 'gasolina');
});
test('rejeita zero, negativos e números não finitos em ambos os preços', () => {
  for (const valor of [0, -1, NaN, Infinity, -Infinity]) {
    assert.throws(() => escolherCombustivel(valor, 5), RangeError);
    assert.throws(() => escolherCombustivel(3, valor), RangeError);
  }
});
