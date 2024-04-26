//FUNCTIONS - LEVEL ONE CODE ORGANIZATION AND REUSE

function add(a, b){
    //many lines possible
    const result = a + b; //calculate result using expression a+b
    return result;
    // return a+b; //combined the above two lines, to eveluate and return the expression without storing in a variable.
}

const output = add(6, 7); //call/invoke the function, and recieving returned result.
console.log(output); //printing result to the console/terminal.

console.log(add(6,7)); //combined the above two lines, log imediately and not store the output.

console.log(add(16,17)); 
console.log(add(61,71)); 
console.log(add(600,700)); 

function recommend(age){
    let output;
    if(age <=8){
        output = "water";
    }else if( age <= 20){
        output = "soda pop";
    }else if (age < 99){
        output = "martini";
    }else{
        output = "hot chocolate";
    }
    output = output.toUpperCase();
    return output;
}
console.log(recommend(56));
console.log(recommend(13));
console.log(recommend(200));
console.log(recommend(3));
