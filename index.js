
function del () {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseFloat(num1);

	num2 = Math.pow(document.getElementById('n2').value / 100, 2);
	num2 = parseFloat(num2);

	result = num1 / num2;

	if (result < 18.5) {
	document.getElementById('out').innerHTML = result.toFixed(1) + ' Недостаток веса';
} else if (result >= 18.5 && result <= 25) {
	document.getElementById('out').innerHTML = result.toFixed(1) + ' Нормальный вес :)';
} else {
	document.getElementById('out').innerHTML = result.toFixed(1) + ' Избыточный вес';
}
}