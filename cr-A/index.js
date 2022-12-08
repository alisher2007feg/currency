var $root = document.querySelector ('div')
alert ("Добро пожаловать в наш сайт обменник валют");
var $root = prompt ("на какие валюты вы хотите Обменять ваши деньги (dollar,euro,rubl)");
var sum = +prompt ("Сколько сумов у вас есть ?"); 
var dollar = 11.500;
var euro = 11.000;
var rubl = 170;
var dollar = sum / dollar;
var euro = sum / euro;
var rubl = sum / rubl;
var dollarCurrency=prompt( `у вас ${dollar} Dollar будет.`);
var euroCurrency =prompt (`у вас ${euro} Euro будет.`);
var rublCurrency =prompt (  `у вас ${rubl} Rubl будет.`);
if (person === "dollar") {
    otvet.textContent = dollarCurrency;
  } else if (person === "euro") {
  otvet.textContent = euroCurrency;
  } else if (person === "rubl") {
  otvet.textContent = rublCurrency;
  } else { 
    ("вы написали неправельную информацию");
  }
 



