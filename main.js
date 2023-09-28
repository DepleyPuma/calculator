const previousNumber = document.querySelector('.previousNumber');
const currentNumber = document.querySelector('.currentNumber');
const mathSign = document.querySelector('.mathSign');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
let result = 0;

const buttonClick = e => {
	if (e.target.textContent === '.' && currentNumber.textContent.includes('.')) return;
	if (e.target.textContent === '.' && currentNumber.textContent === '') return (currentNumber.textContent = '0.');
	currentNumber.textContent += e.target.textContent;
};

const operate = e => {
	if (currentNumber.textContent === '' && e.target.textContent === '-') {
		currentNumber.textContent = '-';
		return;
	} else if (currentNumber.textContent === '') {
		return console.log('test');;
	}

	if (mathSign.textContent !== '') {
		showResults();
	}
	previousNumber.textContent = currentNumber.textContent;
	mathSign.textContent = e.target.textContent;
	currentNumber.textContent = '';
};

const showResults = () => {
	if (currentNumber.textContent === '' || previousNumber.textContent === '') return;

	let a = Number(currentNumber.textContent);
	let b = Number(previousNumber.textContent);
	let operator = mathSign.textContent;

	switch (operator) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = b - a;
			break;
		case 'x':
			result = a * b;
			break;
		case '÷':
			result = b / a;
			break;
		case '2^':
			result = Math.pow(b, a);
			break;
	}

	currentNumber.textContent = result;
	previousNumber.textContent = '';
	mathSign.textContent = '';
};

const clearScreen = () => {
	result.textContent = '';
	currentNumber.textContent = '';
	previousNumber.textContent = '';
	mathSign.textContent = '';
};

numberButtons.forEach(button => button.addEventListener('click', buttonClick));

operatorButtons.forEach(button => button.addEventListener('click', operate));

equalButton.addEventListener('click', showResults);

clearButton.addEventListener('click', clearScreen);
