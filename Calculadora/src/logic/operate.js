import Big from "big.js";

export const operate = (numeroUno, numeroDos, operador) => {
  const uno = Big(numeroUno || "0");
  const dos = Big(
    numeroDos || (operador === "÷" || operador === "x" ? "1" : "0")
  );

  if (operador === "+") return uno.plus(dos).toString();

  if (operador === "-") return uno.minus(dos).toString();

  if (operador === "x") return uno.times(dos).toString();

  if (operador === "/" && dos > 0) return uno.div(dos).toString();

  if (operador === "/" && dos <= 0) return "error 404";
};
