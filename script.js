let a = +prompt(`Enter a value`);
let b = +prompt(`Enter b value`);
let h = +prompt(`Enter h value`);
let factorial;
let i;
let sum;

// debugger

// for (sum=0; numberA<=numberB;numberA+=h){

//     factorial = 1;
//     for(i=1;i<=numberA;i++){
//         factorial *= i ;
//     }

//     console.log(`${numberA} = ${factorial}`);
    
// }

for(sum=0; a<=b; a+=h){
    factorial = 1; 
    for(i=1; i<=a; i++){
        factorial *= i;
    }
    console.log(`${a}! = ${factorial}`);
    sum += factorial;
}
console.log(`Sum= ${sum}`);