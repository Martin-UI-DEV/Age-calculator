const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const inputDay = $('#inputDay');
const inputMonth = $('#inputMonth');
const inputYear = $('#inputYear');
const btnCalculate = $('#btnCalculate');
const results = $('#results');
const years = $('#years');
const months = $('#months');
const days = $('#days');
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

btnCalculate.addEventListener('click', () => {
    validateInputs()

})

function validateInputs() {
    const day = parseInt(inputDay.value.replace(/[^0-9]/g, ''));
    const month = parseInt(inputMonth.value);
    const year = parseInt(inputYear.value);
    console.log(day)
    // if ( day < 1 || day > 31) {
    //     return false;
    // }
    // if ( month < 1 || month > 12) {
    //     return false;
    // }
    // if ( year < 1900 || year > currentYear) {
    //     return false;
    // }
}