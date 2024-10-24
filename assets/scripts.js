const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);


const btnCalculate = $('#btnCalculate');

btnCalculate.addEventListener('click', ageCalculator);



function ageCalculator() {
    const years = $('#years');
    const months = $('#months');
    const days = $('#days');
    const inputDay = $('#inputDay').value;
    const inputMonth = $('#inputMonth').value;
    const inputYear = $('#inputYear').value;
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

    function validateInputs(d, m, y) {    
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
        function isLeapYear(a) {
            return (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);
        }
    
        if (!isNumeric(d) || !isNumeric(m) || !isNumeric(y)) {
            showError('Please enter a valid date');
            return;
        }
        if (d < 1 || d > 31) {
            showError('The day must be between 1 and 31');
            return;
        }
        if (m < 1 || m > 12) {
            showError('The month must be between 1 and 12');
            return;
        }
        if (y < 1900 || y > currentYear) {
            showError(`The year must be greater than 1900 and less than ${currentYear + 1}`);
            return;
        }   
        if (d > maxDaysInMonth[m]) {
            showError('Please enter a valid date');
            return;
        }
        if ((y == currentYear && m > currentMonth) ||
            (y == currentYear && m == currentMonth && d > currentDay)) {
            showError('Please enter a valid date');
            return;
        }
        if (m == 2 && d > (isLeapYear(y) ? 29 : 28)) {
            showError('Please enter a valid date');
            return;
        }  
    }
    
    function birthday(d, m) {
        if (m < currentMonth) {
            return true
        }
        if (m == currentMonth && d <= currentDay) {
            return true
        } else {
            return false
        }
    }
    function calculator(d, m, y) {
       
        if (currentMonth > m) {
            months.textContent = currentMonth - m;
        } else {
            months.textContent = m - currentMonth;
        }
        if (currentDay > d) {
            days.textContent = currentDay - d;
        } else {
            days.textContent = d - currentDay;
        }
        if (currentYear > y) {
            years.textContent = currentYear - y;
        } else {
            years.textContent = y - currentYear;
        } 
    }
    
    validateInputs(inputDay, inputMonth, inputYear);
    alert(birthday(inputDay, inputMonth))
    calculator(inputDay, inputMonth, inputYear);
 }

 //