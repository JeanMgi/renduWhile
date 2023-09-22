"use strict";
let a = 3;
while(a<9){
    a++;
    if(a==7){
        continue;
    }
    if(a==8){
        break;
    }
    console.log(a);
}
console.log("La boucle a explosé au bout de "+a+" tours");