function playG() {
    let max = +prompt('Hãy nhập số lớn nhất để giới hạn trò chơi!')
    const rdn = Math.floor(Math.random() * max) + 1;
    let guess;
    let att;
    for(att = 0; att < 3; att++) {
        guess = +prompt("Nhập số bạn đoán (lần " + (att + 1) + "):" );
        if (guess === rdn) {
            alert("Chúc mừng! Bạn đã đoán đúng số!");
            break;
        } else if (guess > rdn) {
            alert("Số bạn đoán lớn hơn số ngẫu nhiên. Hãy thử lại.");
        } else {
            alert("Số bạn đoán bé hơn số ngẫu nhiên. Hãy thử lại.");
        }
    }
    if (att === 3) {
        alert("Bạn đã hết lượt đoán. Số đúng là: " + rdn);
    }
}

// Gọi hàm playG() khi trang web được tải
playG();