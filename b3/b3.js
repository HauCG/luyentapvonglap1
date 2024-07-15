
function dayf(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return dayf(n - 1) + dayf(n - 2);
}
var resultDiv = document.getElementById('result');
resultDiv.innerHTML = '<h3>Dãy Fibonacci:</h3>';

for (var i = 0; i < 20; i++) {
    var fibNumber = dayf(i);
    var node = document.createElement("p");
    var textNode = document.createTextNode("F(" + i + ") = " + fibNumber);
    node.appendChild(textNode);
    resultDiv.appendChild(node);
}