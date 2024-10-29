let arrayNumeros= [1,8,7,5,3,6];
let maior = arrayNumeros[0];

for(let i=1;i<arrayNumeros.length;i++){
    if (arrayNumeros[i]>maior){
        maior = arrayNumeros[i]
    }
}
console.log(maior)

//Exercicio 2
let muneroExe2=70;
if(muneroExe2=70 % 2 ===0){
console.log(`Par`)
} else{
    console.log(`Impar`)
}

//Exercicio 3
let arrayExe3 = [5,9,3,4,7,11];
let somaexe3 = 0;


for(let i=0;i<arrayExe3.length;i++){
    somaexe3 += arrayExe3[i]; //= somaexe3 + arrayExe3[i];
}
console.log(`Soma é ${somaexe3}`);

//Exercicio 5
let arrayExe5 = [10,15,20,30,35];
for(let i=0;i<arrayExe5[i];i++){
    console.log(`${arrayExe5[i]} x2 ${arrayExe5[i]*2}`);    
}

let numeroMult=[];
let arrayExe5_1 = [1,2,3,4,5]
for (let i=0; i<arrayExe5_1.length;i++){
    numeroMult.push(arrayExe5_1[i]*2);
    console.log(`multiplicação ${numeroMult}`)  
}
