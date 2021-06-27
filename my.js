function changeFunction(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    if (valNum==NaN){
        alert('xin vui long nhap lai')
    };
        console.log(valNum);
}