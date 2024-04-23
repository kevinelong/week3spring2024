let petCount = 2
let MAX_PETS = 3
let allowed = undefined
let cashOnHand = 3000
let DEPOSIT_AMOUNT = 1200

let isWithinLimit = petCount <= MAX_PETS; //evaluate expression
let hasEngoughCash = cashOnHand >= DEPOSIT_AMOUNT

if(isWithinLimit && hasEngoughCash){ //evaluates less than or equall to
    //if expression above is true
    allowed = true;
}else{
    //if expression on 5  was false
    allowed = false;
}

console.log(allowed);