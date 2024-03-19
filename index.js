console.log("Hello World!")

let B = false, 
I = false, 
N = false, 
G = false, 
O = false;

generateRandomNumber(30);
function generateRandomNumber(max) {
    let randomNum = Math.floor(Math.random() * max) + 1;
    
    if (randomNum <= 15) {
        return console.log(`Random number ${randomNum} is an B. 1 - 15`);
    } else if (randomNum >= 16 && randomNum <= 30) {
        return console.log(`Random number ${randomNum} is an I. 16 - 30`);
    } else if (randomNum >= 31 && randomNum <= 45) {
        return console.log(`Random number ${randomNum} is an N. 31 - 45`);    
    }  else if (randomNum >= 46 && randomNum <= 60) {
        return console.log(`Random number ${randomNum} is an G. 46 - 60`); 
    } else if (randomNum >= 61 && randomNum <= 75) {
        return console.log(`Random number ${randomNum} is an O. 61 - 75`); 
    }
    else {
        return console.log(`Random number is invalid.`);
    }
}

if(x <= 15){
    console.log('randomNum is ${x} belongs to "B"');
    B=true;
    BNum = x;
} else if (x >= 16 && x <= 30 ){
    console.log ('randomNum is ${x} belongs to "I"');
    I= true;
    INum = x;
} else if (x >= 31 && x <=45 ) {
    console.log ('randomNum is ${x} belong to "N"');
    N=true;
    NNum = x;
} else if ( x >= 46 && x  <= 60){
    console.log ('randomNum is ${x} belongs to "G"');
    G=true;
    GNum = x;
}else if ( x >=  61 && x <= 75){
    console.log ('randomNum is ${x} belongs to "0"');
    O=true;
    ONum = x;
}else{
    console.log('randomNum ${x} is invalid!');   
}

if (B = true && I == true && N == true && G == true && O == true)
    {console.log('BINGO!!');}
