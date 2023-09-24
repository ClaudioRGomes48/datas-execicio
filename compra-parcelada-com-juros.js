//Compra à vista com desconto (10%) ou parcelada sem juros até (2 ou 6x) e com juros (3 ou 12x)

const valorDaCompra = 90000;
const numeroDeParcelas = 24;

if (numeroDeParcelas === 1){

     //A vista - com 10% de desconto

const desconto = valorDaCompra * 10 / 100;
const valorAPagar = valorDaCompra - desconto;

     console.log(`Você deve pagar  R$ ${valorAPagar}, pois à vista tem 10% de desconto`)

} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {

const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);

    console.log(`Você deve pagar em ${numeroDeParcelas} x sem juros de R$ ${valorDaParcela}`);

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {

      // Parcelado com juros

const valorAPagarComJuros = (valorDaCompra * (1+1/100) ** numeroDeParcelas).toFixed(2);
const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);

    console.log(`Você deve pagar em ${numeroDeParcelas} x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidência de juros.`);

} else {

    // Número de parcelas inválido

    console.log("Número de parcelas inválido")   
}