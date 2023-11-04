const calculadora = require("../models/calculadora");

test("Testar se 3 + 3 retorna 6", () => {
  const resultado = calculadora.somar(3, 3);
  expect(resultado).toBe(6);
});
test("Testar se 7 + 3.15 retorna 10.15", () => {
  const resultado = calculadora.somar(7, 3.15);
  expect(resultado).toBe(10.15);
});
test("Testar se 7 + 3.13 retorna 10.13", () => {
  const resultado = calculadora.somar(7, 3.13);
  expect(resultado).toBe(10.13);
});
test("String em num2 deve retornar 'Erro' ", () => {
  const resultado = calculadora.somar(7, "banana");
  expect(resultado).toBe("Erro");
});
test("String em num1 deve retornar 'Erro' ", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("Erro");
});
test("String em ambos os argumentos retornam 'Erro' ", () => {
  const resultado = calculadora.somar("banana", "maçã");
  expect(resultado).toBe("Erro");
});
test("Testar se -3 + 3 retorna 0", () => {
  const resultado = calculadora.somar(-3, 3);
  expect(resultado).toBe(0);
});
test("Testar se -3 + 2 retorna -1", () => {
  const resultado = calculadora.somar(-3, 2);
  expect(resultado).toBe(-1);
});

//Testes de Multiplicação

test("String em ambos os argumentos retornam 'Erro' ", () => {
  const resultado = calculadora.mult("banana", "maçã");
  expect(resultado).toBe("Erro");
});
test("Testar se 7 * 3.13 retorna 21.91", () => {
  const resultado = calculadora.mult(7, 3.13);
  expect(resultado).toBe(21.91);
});
test("Testar se 0 * 3.13 retorna 0", () => {
  const resultado = calculadora.mult(0, 3.13);
  expect(resultado).toBe(0);
});
test("Testar se -1 * 3.13 retorna -3.13", () => {
  const resultado = calculadora.mult(-1, 3.13);
  expect(resultado).toBe(-3.13);
});
test("Testar se -1 * -3.13 retorna +3.13", () => {
  const resultado = calculadora.mult(-1, -3.13);
  expect(resultado).toBe(3.13);
});

//Testes de Multiplicação

test("Testar se 10 / 5 retorna 2", () => {
  const resultado = calculadora.divisao(10, 5);
  expect(resultado).toBe(2);
});
test("Testar se 10 / 0 retorna Infinito", () => {
  const resultado = calculadora.divisao(10, 0);
  expect(resultado).toBe(Infinity);
});
test("Testar se 0 / 10 retorna 0", () => {
  const resultado = calculadora.divisao(0, 10);
  expect(resultado).toBe(0);
});
test("Testar se 25 / 10 retorna 2.50", () => {
  const resultado = calculadora.divisao(25, 10);
  expect(resultado).toBe(2.5);
});
test("Testar se 100 / 3 retorna dízima limitada a duas casas", () => {
  const resultado = calculadora.divisao(100, 3);
  expect(resultado).toBe(33.33);
});

//Testes de Subtração

test("Testar se 10 - 5 retorna 5", () => {
  const resultado = calculadora.subt(10, 5);
  expect(resultado).toBe(5);
});
test("Testar se 10 - 15 retorna -5", () => {
  const resultado = calculadora.subt(10, 15);
  expect(resultado).toBe(-5);
});
test("Testar se -10 - 15 retorna -25", () => {
  const resultado = calculadora.subt(-10, 15);
  expect(resultado).toBe(-25);
});

//Testes de Potenciação

test("Testar se 2 ^ 3 retorna 8", () => {
  const resultado = calculadora.poten(2, 3);
  expect(resultado).toBe(8);
});
