function calculateSumOfDivisibles() {
    var numTerms = 30;
    var sum = 0;
    var numbers = []; // khai báo mảng rỗng
    var count = 0;
    var sochia = 7;

    while (count < numTerms) {
        if (sochia % 7 === 0) {
            numbers.push(sochia);
            sum += sochia;
            count++;
        }
        sochia++;
    }

    // kq
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Tổng 30 số chia hết cho 7 đầu tiên là: ' + sum + '</p>';
    resultDiv.innerHTML += '<p>' + numbers.join(', ') + '</p>';
}

//  hàm tính tổng sau khi tìm ra các số
window.onload = calculateSumOfDivisibles;
