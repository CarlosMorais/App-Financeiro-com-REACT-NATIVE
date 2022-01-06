import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function getExpense(data) {
  let total = 0;
  data && data.length && data.map((item) => {
    item.expenses && item.expenses.length && item.expenses.map((ex) => {
      total += ex.total;
    })
  })

  return total;
}

const forNumberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

const clearNumber = (number, commaToPoint = true) => {
  if (number && number.length > 1) {
    if (commaToPoint) {
      while (number.indexOf('.') > -1)
        number = number.replace('.', '')
      while (number.indexOf(',') > -1)
        number = number.replace(',', '.')
    }
    while (number.indexOf('R$') > -1)
      number = number.replace('R$', '');
    while (number.indexOf(' ') > -1)
      number = number.replace(' ', '');
    while (number.indexOf('-') > -1)
      number = number.replace('-', '');
  }

  return number;
}

function numberFormat(number, clearnumber = false, clearNumberCommaToPoint = true) {
  number = forNumberFormat(number);
  // if (clearnumber == true)
  //   number = clearNumber(number, clearNumberCommaToPoint);

  while (number.indexOf('R$') > -1 && number.indexOf('R$ ') === -1)
    number = number.replace('R$', 'R$ ');
  while (number.indexOf('  ') > -1)
    number = number.replace('  ', ' ');

  if (number.substring(number.length - 3, number.length - 2) == '.') {
    while (number.indexOf('.') > -1)
      number = number.replace('.', '|||');
    while (number.indexOf(',') > -1)
      number = number.replace(',', '.');
    while (number.indexOf('|||') > -1)
      number = number.replace('|||', ',');
  }

  return number;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function dayWeek(numberDay) {
  var day = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  return day[numberDay];
}

function monthInText(numberMonth) {
  const month = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
  return month[numberMonth];
}

function monthInAcronyms(numberMonth) {
  const month = new Array("JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ");
  return month[numberMonth];
}

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none')
}

function capitalize(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1);
}

function getDay(date) {
  return date && date.length >= 10 ? date.substring(8, 10) : date;
}

function getMonth(date) {
  return date.substring(5, 7);
}

function getYear(date) {
  return date.substring(0, 4);
}

function dateFormat(date, type = 1) {
  if (!date || date.length != 10)
    return date;

  var day = getDay(date);
  var month = getMonth(date);
  var year = getYear(date);

  if (parseInt(day) < 10)
    day = `0${parseInt(day)}`;
  if (parseInt(month) < 10)
    month = `0${parseInt(month)}`;

  let result;
  if (type == 1)
    result = day + '/' + month + '/' + year
  else if (type == 2)
    result = year + '-' + month + '-' + day
  else if (type == 3)
    result = day + ' ' + capitalize(monthInAcronyms(month - 1).toLowerCase()) + ', ' + dayWeek(new Date(date).getDay());
  else
    result = year + '-' + month + '-' + day;

  return result;
}

const getCurrentDate = (isBR = true) => {

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return isBR ? (day < 10 ? `0${day}` : day) + '/' + (month < 10 ? `0${month}` : month) + '/' + year : year + '-' + (month < 10 ? `0${month}` : month) + '-' + (day < 10 ? `0${day}` : day);//format: dd-mm-yyyy;
}

function randomDate(days = 1) {
  var randomNumber = getRandomInt(1, Math.abs(days)) * (days < 0 ? -1 : 1);
  var date = addDate(null, randomNumber);

  var day = String(new Date(date).getDate());
  var month = String(new Date(date).getMonth() + 1);
  var year = String(new Date(date).getFullYear());


  if (parseInt(day) < 10)
    day = `0${parseInt(day)}`;
  if (parseInt(month) < 10)
    month = `0${parseInt(month)}`;

  var newDate = `${year}-${month}-${day}`;

  return newDate;
}

function addDate(date = null, x = 1) {
  if (date == null) date = new Date();
  var d = new Date(date);
  d.setDate(x + d.getDate());
  return d;
}

export default {
  addDate,
  randomDate,
  capitalize,
  dateFormat,
  getCurrentDate,
  isHidden,
  currencyFormat,
  numberFormat,
  clearNumber,
  getExpense,
  getRandomInt,
  monthInText,
  monthInAcronyms,
  dayWeek,
  getDay,
  getMonth,
  getYear,
}