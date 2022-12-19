
class MonedasDeCambio {
  constructor(ValorInit, Nombre) {
    this.valorEnPesos = ValorInit;
    this.name = Nombre;
  }
  valorEnPesos;
  name;
  convertirAPesos(Valor) {
    return (Valor * this.valorEnPesos).toFixed(3);
  }
  convertirAMimoneda(Valor) {
    return (Valor / this.valorEnPesos).toFixed(3);
  }
}
const euroblue = new MonedasDeCambio(344, 'euroblue');
const euro = new MonedasDeCambio(344 * 0.8, 'euro');
const dolarblue = new MonedasDeCambio(300, 'dolarblue');
const dolar = new MonedasDeCambio(300 * 0.8, 'dolar');
const librablue = new MonedasDeCambio(320, 'librablue');
const libra = new MonedasDeCambio(320 * 0.8, 'libras');
const pesos = new MonedasDeCambio(1, 'pesos');
var listaDeMonedas = [
  euroblue,
  euro,
  dolar,
  dolarblue,
  librablue,
  libra,
  pesos,
];
var boton = document.getElementById('convertir');
boton.addEventListener('click', cambio);
function cambio() {
  var monedaACambiar = document
    .getElementById('monedaACambiar')
    .value.toLowerCase();
  var valorDeMonedaACambiar = document.getElementById('montoACambiar').value;
  var monedaDestino = document
    .getElementById('monedaDestino')
    .value.toLowerCase();
  var valorFinal = document.getElementById('montoCambiado');
  if (valorDeMonedaACambiar < 0) {
    alert('valor ingresado fuera de rango');
    document.getElementById('montoACambiar').value = 0;
  } else {
    let objeto = listaDeMonedas.find(
      elemento => elemento.name == monedaDestino,
    );
    let objeto2 = listaDeMonedas.find(
      elemento => elemento.name == monedaACambiar,
    );
    valorFinal.value = objeto.convertirAMimoneda(
      objeto2.convertirAPesos(valorDeMonedaACambiar),
    );
  }
}
