function calculateSum() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const sum = num1 + num2;

    const result = document.getElementById("result");
    result.innerText = `The sum of ${num1} and ${num2} is: ${sum}`;
}