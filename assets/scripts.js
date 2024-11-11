const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);
const btnCalculate = $('#btnCalculate');
btnCalculate.addEventListener('click', ageCalculator);
function ageCalculator() {
    const years = $('#years');
    const months = $('#months');
    const days = $('#days');
    const inputDay = Number($('#inputDay').value);
    const inputMonthValue = $('#inputMonth').value;
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
    function removeLeadingZero(num) {
        let strNumber = num.toString();       
        if (strNumber.charAt(0) === '0') {
          strNumber = strNumber.slice(1);
        }
        return parseInt(strNumber, 10);
      }
    const inputMonth =  removeLeadingZero(inputMonthValue);
    function validateInputs(d, m, y) {    
        function isNumeric(value) {
            return /^\d+$/.test(value);
        }
        function showError(message) {
            displayError.textContent = message;
            displayError.style.visibility = 'visible';
            years.textContent = '--';
            months.textContent = '--';
            days.textContent = '--';
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
    function checkBirthday(d, m) {
        if (m < currentMonth) {
            return true
        }
        if (m == currentMonth && d <= currentDay) {
            return true
        } else {
            return false
        }
    }
    function calculateMonths(m, cm, d, cd) {
        let result = 0;
        if (cm < m && d > cd || cm > m && d > cd) {
            result = cm - 1;
        } else {
            result = cm;
        }
        return result;
    }
    
    function calculateDays(cd, cm, d) {
        let prevMonthDays = maxDaysInMonth[cm - 1];
        let result = (prevMonthDays - d) + cd;
        return result;
    }

    const birthday = checkBirthday(inputDay, inputMonth);
    
    function calculator() { 
        birthday ? years.textContent = currentYear - inputYear : years.textContent = (currentYear - inputYear) - 1;
        months.textContent = calculateMonths(inputMonth, currentMonth, inputDay, currentDay);
        days.textContent = calculateDays(currentDay, currentMonth, inputDay)
    }
 
    calculator();
    validateInputs(inputDay, inputMonth, inputYear); 
 }

 