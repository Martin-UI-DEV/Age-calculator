const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);


const btnCalculate = $('#btnCalculate');
const results = $('#results');
const years = $('#years');
const months = $('#months');
const days = $('#days');
const displayError = $('#display-error');
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

const maxDaysInMonth = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

btnCalculate.addEventListener('click', validateInputs)


function validateInputs() {
    const inputDay = $('#inputDay').value;
    const inputMonth = $('#inputMonth').value;
    const inputYear = $('#inputYear').value;

    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

    function showError(message) {
        displayError.textContent = message;
        displayError.style.visibility = 'visible';
    }
    function hideError() {
        displayError.style.visibility = 'hidden';
    }

    hideError();

    if (!isNumeric(inputDay) || !isNumeric(inputMonth) || !isNumeric(inputYear)) {
        showError('Please enter a valid date');
        return;
    }
    if (inputDay < 1 || inputDay > 31) {
        showError('The day must be between 1 and 31');
        return;
    }
    if (inputMonth < 1 || inputMonth > 12) {
        showError('The month must be between 1 and 12');
        return;
    }
    if (inputYear < 1900) {
        showError('The year must be greater than 1900.');
        return;
    }

    if (inputDay > maxDaysInMonth[inputMonth]) {
        showError('Please enter a valid date');
        return;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    if (inputMonth == 2 && inputDay > (isLeapYear(inputYear) ? 29 : 28)) {
        showError('Please enter a valid date');
        return;
    }

}

