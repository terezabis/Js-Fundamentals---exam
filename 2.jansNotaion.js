function notation(input) {
    let numbers = [];
    let strings = [];
    let result = [];

    for(let element of input){
        if(typeof element === "number"){
            numbers.push(element);
        } else {
            strings.push(element);
        }
    }

    if(numbers.length<=strings.length || input.length===0){
        console.log("Error: not enough operands!");
    } else if (numbers.length-strings.length>1){
        console.log("Error: too many operands!");
    } else {
        for(let i = 0; i < input.length; i++){
            if(typeof input[i]==="number"){
                result.push(input[i]);
            } else {
                let operator = input[i];
                let operand2 = result.pop();
                let operand1 = result.pop();
                let res = resultFromOperation(operand1, operand2, operator);
                result.push(res);
            }
        }
        console.log(Number(result[0]));
    }

    function resultFromOperation(num1, num2, operator) {
        switch (operator){
            case "+": return num1 + num2;
            case "-": return  num1 - num2;
            case "*": return num1 * num2;
            case "/": return num1 / num2;
        }
    }


}

notation(
    [-1,
        1,
        '+',
        101,
        '*',
        18,
        '+',
        3,
        '/']

)