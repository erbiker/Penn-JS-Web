/*
 * Implement all your JavaScript in this file!
 */

//sets what operation is pending
var operator = '=';
var savedOperator;
var savedNum2;
// indicate if numbers are currently being typed
// false after operator is pressed and page load, true once a number is pressed again
var typing = false;

var num1 = 0;

function numButtonPress() {
    var display = document.getElementById("display");
    if(typing) {
        display.value += this.value;
    } else {
        display.value = this.value;
        typing = true;
    }
}

function operatorButtonPress() {
    if (!typing) {
        if (this.value != '=') {
            operator = this.value;
            console.log("second op pressed");
        } else if (savedOperator) {
            var display = document.getElementById("display");
            switch (savedOperator) {
                case '+':
                    display.value = num1 + savedNum2;
                    break;
                case '-':
                    display.value = num1 - savedNum2;
                    break;
                case '*':
                    display.value = num1 * savedNum2;
                    break;
                case '/':
                    display.value = num1 / savedNum2;
                    break;
            }
            num1 = Number(display.value);
        }
    } else {
        var display = document.getElementById("display");
        var num2 = Number(display.value);
        console.log(num2);
        switch (operator) {
            case '+':
                display.value = num1 + num2;
                break;
            case '-':
                display.value = num1 - num2;
                break;
            case '*':
                display.value = num1 * num2;
                break;
            case '/':
                display.value = num1 / num2;
                break;
        }
        num1 = Number(display.value);
        if (this.value == '=') {
            savedOperator = operator;
            savedNum2 = num2;
        } else {
            savedOperator = null;
            savedNum2 = null;
        }
        operator = this.value;
        typing = false;
    }
    console.log("num1: " + num1);
}

function clearButtonPress() {
    var display = document.getElementById("display");
    display.value = "";
    operator = '=';
    typing = true;
    num1 = 0;
}

$(".num-button").on('click', numButtonPress);
$(".operator-button").on('click', operatorButtonPress);
$("#clearButton").on('click', clearButtonPress);   