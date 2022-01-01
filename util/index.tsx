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

function numberFormat(number, clearNumber_ = false, clearNumberCommaToPoint = true) {
  number = forNumberFormat(number);
  if (clearNumber_)
    number = clearNumber(number, clearNumberCommaToPoint);

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

function dateFormat(date, type = 1) {
  var day = date.substring(8, 10),
    month = date.substring(5, 7),
    year = date.substring(0, 4);

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

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return isBR ? day + '/' + month + '/' + year : year + '-' + month + '-' + day;//format: dd-mm-yyyy;
}

export default {
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
}