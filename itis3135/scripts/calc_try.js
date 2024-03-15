window.onload = function () {
    document.getElementById("button0").onclick = function() { appendToDisplay('0'); };
    document.getElementById("button1").onclick = function() { appendToDisplay('1'); };
    document.getElementById("button2").onclick = function() { appendToDisplay('2'); };
    document.getElementById("button3").onclick = function() { appendToDisplay('3'); };
    document.getElementById("button4").onclick = function() { appendToDisplay('4'); };
    document.getElementById("button5").onclick = function() { appendToDisplay('5'); };
    document.getElementById("button6").onclick = function() { appendToDisplay('6'); };
    document.getElementById("button7").onclick = function() { appendToDisplay('7'); };
    document.getElementById("button8").onclick = function() { appendToDisplay('8'); };
    document.getElementById("button9").onclick = function() { appendToDisplay('9'); };
    document.getElementById("buttonDecimal").onclick = function() { appendToDisplay('.'); };
    document.getElementById("buttonAdd").onclick = function() { appendToDisplay('+'); };
    document.getElementById("buttonSubtract").onclick = function() { appendToDisplay('-'); };
    document.getElementById("buttonMultiply").onclick = function() { appendToDisplay('*'); };
    document.getElementById("buttonDivide").onclick = function() { appendToDisplay('/'); };
    document.getElementById("buttonClear").onclick = function() { clearDisplay(); };
    document.getElementById("buttonCalculate").onclick = function() { calculate(); };
};

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
