/* exercises IfScripts pay_rules.js*/
//INPUTS
let payRate = 17.5;
let hoursWorked = 45;
//OUTPUT
let reason = "";
let grossPay = payRate * hoursWorked; //DEFAULT
//CONSTANTS
const STANDARD_HOURS = 40;
const overtimeMultiplier = 1.5;
//MAKE A DECISION
if(hoursWorked > STANDARD_HOURS){ //OVER
    reason = "IS OVER LIMIT"
    const overtimeHours = hoursWorked - STANDARD_HOURS;
    const basePay = STANDARD_HOURS * payRate;
    const bonusRate = overtimeMultiplier * payRate;
    const extraPay = overtimeHours * bonusRate;
    //REPLACE DEFAULT
    grossPay = basePay + extraPay;
}else if(hoursWorked < STANDARD_HOURS){ //UNDER
    reason = "IS UNDER LIMIT"
}else{//EXACT
    reason = "IS EXACTLY AT LIMIT"
}
//FINALLY PRINT FINAL OUTPUT
console.log("GROSS PAY:", grossPay, "REASON:", reason, STANDARD_HOURS);