    //Exemplo
    let numero = 9;
    if ( numero >= 10 ) {
        console.log("numero maior que 10")
        } else {
        console.log("numero menor que 10")
        }

//Exercicio 1
let nome, nota1, nota2, media; 
nome = 'Guilherme';
nota1 = 6;
nota2 = 6;
media = (nota1+nota2)/2;

console.log(`${nome} sua media é ${media}`)
if (media>=7) {
    console.log(`Parabens, vc foi aprovado`)
} else if (media<=5){
    console.log(`Infelizmente, vc foi reprovado`)
} else {
    console.log(`Recuperação`)
}

//exercicio 3
for(let i=1;i<=10;i++) { //enquanto i,5, repita
console.log(i);
if(i==5) {
    console.log(`Voce esta na 5ª volta`)
}
}


