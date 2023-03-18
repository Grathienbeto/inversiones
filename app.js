const interes = ((78 / 365) * 30).toFixed(2);

const interesDisplay = document.querySelector("#interes");
interesDisplay.innerHTML = `Rédito actual por mes: ${interes}% `;

const sueldo = document.querySelector("#sueldo");
const meses = document.querySelector("#meses");
const cuenta = document.querySelector("#cuenta");

const div = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let inputSueldo = parseInt(sueldo.value);
  let inputMes = parseInt(meses.value);
  let inputCuenta = parseInt(cuenta.value);
  let acumulado = 0;

  if (inputMes === 1) {
    let redito = reditoUnMes(inputSueldo, interes, inputCuenta);
    div.innerHTML = `<h2>El rédito en un mes es $${redito}</h2>`;
  } 
  else if (inputMes > 1) {
    let redito = 0;
    for (let i = 1; i <= inputMes; i++) {
      redito = ((inputSueldo + inputCuenta) * interes) / 100;
      acumulado = inputCuenta + redito + inputSueldo;
      inputCuenta = acumulado;
    }
    div.innerHTML = `<h2>En ${inputMes} meses, invirtiendo $${inputSueldo} por mes, más que genera el plazo fijo. Tendrías $${acumulado.toFixed()}. Esa cantidad genera $${redito.toFixed()}.</h2>`;
  } 
  else {
    alert("Error en la cantidad de meses");
  }

  e.preventDefault();
});

const reditoUnMes = (sueldo, interes, cuenta) => {
  const resultado = ((sueldo + cuenta) * interes) / 100;
  return resultado;
};
