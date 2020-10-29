

let cryptoData = { }
let userInput;

const $name = $('#name');
const $symbol = $('#symbol');
const $price = $('#price');
const $description = $('#description');
const $iconURL = $('#iconURL')


$('form').on('submit', handleGetData);

function handleGetData(event) {
	event.preventDefault();
	$userInput= $('#input-box');
  userInput = $userInput.val();
  console.log(userInput)
  

  
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://coinranking1.p.rapidapi.com/coin/${userInput}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "c0f227240amsh55aa92563c9e45cp1e4b12jsn976987091817"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    cryptoData.name=response.data.coin.name
    cryptoData.symbol=response.data.coin.symbol
    cryptoData.price=response.data.coin.price
    cryptoData.description=response.data.coin.description
    cryptoData.iconURL=response.data.coin.iconURL
    render()
  });
}


 function render() {
  $name.text(cryptoData.name);
  $symbol.text(cryptoData.symbol);
	$price.text(cryptoData.price);
  $description.text(cryptoData.description);
  $iconURL.text(cryptoData.iconURL);
 }
  
	