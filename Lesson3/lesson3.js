const numberOfCalc = +prompt('Сколько раз будет работать калькулятор?', '');

for (let i=0; i < numberOfCalc; i++) {
    strangeCalc();
}

function strangeCalc() {

    let operand1, operand2, operator;

    function cheсkOperand() {
        operand1 = prompt('Введите первый операнд', '');
        operand2 = prompt('Введите второй операнд', '');
        if (isNaN(operand1) || isNaN(operand2) || operand1 ==
        undefined || operand2 == undefined) {
            alert('Введите числа');
            cheсkOperand();
        } else {
            return operand1, operand2;
        }
    }

    function cheсkOperator() {
        operator = prompt('Введите оператор, + - * или /', '');
        if (operator === '+' || operator === '-' || operator ===
        '*' || operator === '/') {
            return operator;
        } else {
            alert('Введите оператор!');
            cheсkOperator();
        }
    }

    cheсkOperand();
    cheсkOperator();

    switch (operator) {
        case '+':
            alert (`Результат ${operand1} + ${operand2} = ${(+operand1) + (+operand2)}`);
            break;
        case '-' :
            alert (`Результат ${operand1} - ${operand2} = ${(+operand1) - (+operand2)}`);
            break;
        case '*' :
            alert (`Результат ${operand1} * ${operand2} = ${(+operand1) * (+operand2)}`);
            break;
        case '/' :
            alert (`Результат ${operand1} / ${operand2} = ${(+operand1) / (+operand2)}`);
            break;
    }

}

