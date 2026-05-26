function calculateLeap() {
    var height = parseFloat(document.getElementById('height').value);
    var jump = parseFloat(document.getElementById('jump').value);

    if (isNaN(height) || isNaN(jump) || height <= 0 || jump <= 0) {
        document.getElementById('textrez').innerHTML = "Будь ласка, введіть коректні числа!";
        return;
    }
    var leapDiff = (jump - height) * 100;
    if (leapDiff > 0) {
        document.getElementById('textrez').innerHTML = "Результат: стрибок на <b>" + leapDiff.toFixed(1) + " см</b> вище зросту атлета.";
    } else {
        document.getElementById('textrez').innerHTML = "Результат: стрибок нижче зросту або дорівнює йому.";
    }
}