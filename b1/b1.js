function countTo99() {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    for (let i = 1; i <= 99; i++) {
        let p = document.createElement('p');
        p.textContent = i;
        outputDiv.appendChild(p);

        if (i === 99) {
            alert('Đã hoàn thành');
        }
    }
}