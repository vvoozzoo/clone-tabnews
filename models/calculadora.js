function somar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro";
  }
  return parseFloat((num1 + num2).toFixed(2));
}

exports.somar = somar;

function mult(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro";
  }
  return parseFloat((num1 * num2).toFixed(2));
}

exports.mult = mult;

function divisao(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro";
  }
  return parseFloat((num1 / num2).toFixed(2));
}

exports.divisao = divisao;

function subt(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro";
  }
  return parseFloat((num1 - num2).toFixed(2));
}

exports.subt = subt;

function poten(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro";
  }
  return parseFloat((num1 ** num2).toFixed(2));
}

exports.poten = poten;
