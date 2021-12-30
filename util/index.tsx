function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

 function getExpense(data){
    let total = 0;
    data && data.length && data.map((item)=>{
        item.expenses && item.expenses.length && item.expenses.map((ex)=>{
            total += ex.total;
        })
    })

    return total;
}

 const numberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  const clearNumber = (number) => {
    if(number && number.length)
        while(number.indexOf('.') > -1)
            number.replace('.','')
    if(number && number.length)
        while(number.indexOf(',') > -1)
            number.replace(',','.')
        
    return number;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function monthInText(numberMonth){
    const month = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    return month[numberMonth];
  }

  function monthInAcronyms(numberMonth){
    const month = new Array ("JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ");
    return month[numberMonth];
  }

 export default {
    currencyFormat,
    numberFormat,
    clearNumber,
    getExpense,
    getRandomInt,
    monthInText,
    monthInAcronyms,
}