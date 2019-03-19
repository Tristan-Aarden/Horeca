var totalCost = 0;
var typeOfOrder;
var amountOfOrder = 0;
var amountOfWine = 0;
var amountOfBeer = 0;
var amountOfSoda = 0;
var totalWine = 0;
var totalBeer = 0;
var totalSoda = 0;
const fris_Price = 2.00;
const bier_Price = 2.50;
const wijn_Price = 3.00;

  //Laat de gebruiker een bestelling invoeren en controleert daarna de invoer. Indien een correcte invoer is gedaan, vraag naar het aantal van de ingevoerde bestelling.
function addOrder() {
  typeOfOrder = prompt('Welke bestelling wilt u toevoegen?').toLowerCase();

  if (typeOfOrder == 'fris' || typeOfOrder == 'wijn' || typeOfOrder == 'bier') {
    amountOfOrder = prompt(`Hoeveel ${typeOfOrder} wilt u toevoegen aan uw bestelling?`);
    calcPrices();
    askForOrder();


  } else if (typeOfOrder == 'stop') {
    showTotal();

  } else {
    alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
    addOrder();
  }
}

//Bereken de prijs na een bestelling is gedaan.
function calcPrices() {
  switch (typeOfOrder) {
    case 'fris':

      amountOfSoda += amountOfOrder;
      totalSoda += fris_Price * amountOfOrder;
      totalCost += fris_Price * amountOfOrder;
      break;
    case 'bier':
      amountOfBeer += amountOfOrder;
      totalBeer += bier_Price * amountOfOrder;
      totalCost += bier_Price * amountOfOrder;
      break;
    case 'wijn':
      amountOfWine += amountOfOrder;
      totalWine += wijn_Price * amountOfOrder;
      totalCost += wijn_Price * amountOfOrder;
      break;
    default:
      break;
  }
}
  //Laat de gebruiker de rekening zien met de kosten per bestelling en de totale kosten.
  function showTotal() {
    alert(totalSoda);
    location.href = "./Maestro's-Lounge_rekening.html";


  }

  //Vraag de gebruiker of die nog een bestelling wilt plaatsen.
  function askForOrder() {
    more = confirm('Wil je nog een bestelling toevoegen?');
    if (more == true) {
      addOrder();
    } else {

    }
  }
