let qtdAdultos = document.getElementById("adultos").value;
let qtdCriancas = document.getElementById("criancas").value;
let qtdHoras = document.getElementById("hora").value;
let resultado = document.getElementById("resultado");

console.log(qtdAdultos);

function calcularQtd(){ 
    
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

    resultado.innerHTML = '<p> '+ qtdCarneTotal + 'G de carne</p>'
    resultado.innerHTML += '<p> '+ qtdCervejaTotal + 'ML de Cerveja</p>'
    resultado.innerHTML += '<p> '+ qtdRefrigeranteTotal + 'ML de carne</p>'
}