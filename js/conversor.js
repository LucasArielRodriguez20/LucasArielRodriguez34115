const valorEuroBlue=344;
const valorDolarBlue=300;
const valorLibraBlue=320;
let flag="si";
alert("Bienvenido al sistema de cotizaciones \nPara su conocimiento el sistema trabaja solo con conversiones de pesos a Libras,Euros y Dolares (incluyendo sus valores en blue)");
while(flag.toLocaleLowerCase().split(" ").join("")=="si"){ 
let valorPesos= prompt("Ingrese el monto en pesos que quisiera convertir");
let nombreDeMoneda= prompt("Ingrese el tipo de moneda al que quiera cambiar");
    switch (nombreDeMoneda.toLocaleLowerCase().split(" ").join("")){
        case "euro":
            alert("el resultado en " + nombreDeMoneda + "s" + " es " + valorConvertido(valorPesos , blueToNormal("euro")));
            break;
        case "dolar":
            alert("el resultado en " + nombreDeMoneda + "s" + " es " + valorConvertido(valorPesos , blueToNormal("dolar")));
            break;
        case "libra":
            alert("el resultado en " + nombreDeMoneda + "s" + " es " + valorConvertido(valorPesos , blueToNormal("libra")));
            break;
        case  "euroblue":
            alert("el resultado en " + nombreDeMoneda + " es " + valorConvertido(valorPesos , blueToNormal("euro blue")));
            break;
        case "dolarblue":
            alert("el resultado en " + nombreDeMoneda + " es " + valorConvertido(valorPesos , blueToNormal("dolar blue")));
            break;
        case "librablue":
            alert("el resultado en " + nombreDeMoneda + " es " + valorConvertido(valorPesos , blueToNormal("libra blue")));
            break;
        default:
            alert("El tipo de moneda ingresado es desconocido porfavor vuelva a intentarlo");
            flag="si"
    }
flag =prompt("¿Desea realizar otra conversión?");
}
alert("Muchas gracias por usar el sistema, vuelva pronto.");
function blueToNormal(nombreDeMoneda){
    switch (nombreDeMoneda.toLocaleLowerCase()){
        case "euro":
            return valorEuroBlue*0.8;
        case "dolar":
            return valorDolarBlue*0.8;
        case "libra":
            return valorLibraBlue*0.8;
        case "euro blue":
            return valorEuroBlue;
        case "dolar blue":
            return valorDolarBlue;
        case "libra blue":
            return valorLibraBlue;
        default:
            alert("Error 404");
    }
}
function valorConvertido(valorPesos,dividendo){
    return valorPesos/dividendo;
}