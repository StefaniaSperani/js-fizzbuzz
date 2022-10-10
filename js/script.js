"use strict";

// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// creo un ciclo che mi dia dei numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    // console.log(i);

    const wrapper = document.getElementsByClassName('wrapper');
    const myDiv = document.createElement('div');
    myDiv.className = 'square';
    // console.log(myDiv);

    // se i numeri sono divisibili sia per 3 che per 5
    if((i % 3 == 0) && (i % 5 == 0)){
        // console.log('fizzbuzz');

    // se i numeri sono divisibili per 5
    } else if(i % 5 == 0){
        // console.log('buzz');

     // se i numeri sono divisibili per 3
    } else if(i % 3 == 0){
        // console.log('fizz');

    // se non sono divisibili ne per 3 e nemmeno per 5
    } else{
        console.log(i + 'else');
    }

    wrapper.append(myDiv);
};
