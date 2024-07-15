function sọchiahet5() {
    var a = 0, b = 1, c = a + b;
    while (true) {
        c = a + b;
        if (c % 5 === 0) return c;
        a = b;
        b = c;
    }
}

var resultDiv = document.getElementById('result');
var firstDivisibleBy5 = sọchiahet5();
resultDiv.innerHTML = '<h3>Số đầu tiên trong dãy Fibonacci chia hết cho 5:</h3><p>' + firstDivisibleBy5 + '</p>';