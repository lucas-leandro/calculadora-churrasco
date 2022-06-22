let Adultos = document.getElementById("adultos");
let Criancas = document.getElementById("criancas");
let Horas = document.getElementById("hora");
let resultado = document.getElementById("resultado");


function calcularQtd(){ 
    
    let qtdAdultos = Adultos.value;
    let qtdCriancas = Criancas.value;
    let qtdHoras = Horas.value;

    if(qtdHoras >= 6){
        qtdCarne = 650;
        qtdCerveja = 2000;
        qtdRefrigerante = 1500;
    }else{
        qtdCarne = 400;
        qtdCerveja = 1200;
        qtdRefrigerante = 1000;
    }

    let qtdCarneTotal = (qtdCarne * qtdAdultos + (qtdCarne / 2 * qtdCriancas));
    let qtdCervejaTotal = qtdCerveja * qtdAdultos;
    let qtdRefrigeranteTotal = (qtdRefrigerante * qtdAdultos + (qtdRefrigerante / 2 * qtdCriancas));

    resultado.innerHTML = '<p> '+ (qtdCarneTotal/1000) + ' Kg de carne</p>'
    resultado.innerHTML += '<p> '+Math.ceil(qtdCervejaTotal/355) + ' Latas de Cerveja</p>'
    resultado.innerHTML += '<p> ' +Math.ceil(qtdRefrigeranteTotal/2000) + ' Garrafas de 2L de carne</p>'
}