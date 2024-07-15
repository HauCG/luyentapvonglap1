function checkTemperature() {
    let temperature = prompt("Please enter the current temperature:");

    if (temperature !== null) {
        temperature = parseFloat(temperature);

        if (temperature > 100) {
            alert("Nóng quá giảm nhiệt độ đi!");
        } else if (temperature < 20) {
            alert("Lạnh quá tăng nhiệt độ đi!");
        } else {
            alert("Bình Thường.");
        }
    }
}