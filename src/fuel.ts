export function escolherCombustivel(alcool: number, gasolina: number): 'alcool' | 'gasolina' {
  if (![alcool, gasolina].every(valor => Number.isFinite(valor) && valor > 0)) {
    throw new RangeError('Informe preços positivos e válidos para os dois combustíveis.');
  }
  return alcool / gasolina <= 0.7 ? 'alcool' : 'gasolina';
}
