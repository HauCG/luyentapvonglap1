    function calculateFibonacciSum() {
    var numTerms = 20;
    var sum = 0;
    var fibNumbers = [];

    // Tính toán dãy Fibonacci và tổng
    for (var i = 0; i < numTerms; i++) {
    var fibNumber = fibonacci(i);
    fibNumbers.push(fibNumber);
    sum += fibNumber;
}

    // kq
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Tổng của 20 số đầu tiên trong dãy Fibonacci là: ' + sum + '</p>';
    resultDiv.innerHTML += '<p>' + fibNumbers.join(', ') + '</p>';
}

    //
    function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

    // Gọi hàm tính tổng sau khi tìm ra các số
    window.onload = calculateFibonacciSum;
