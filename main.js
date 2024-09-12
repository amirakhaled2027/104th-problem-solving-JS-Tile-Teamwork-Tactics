

function possibleBonus(num1, num2){

    if (num1 > num2) {
        return false;
    }
    else if (num2 - num1 > 6) {
        return false;
    }
    else {
        return true;
    }
    
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
