window.onload = function() {
  var totalCost = 0;
  var typeOfOrder;
  var amountOfOrder = 0;
  var amountOfWine = 0;
  var amountOfBeer = 0;
  var amountOfSoda = 0;
  var amountOfBitter_8 = 0;
  var amountOfBitter_16 = 0;
  var totalWine = 0;
  var totalBeer = 0;
  var totalSoda = 0;
  var total_bitter_8 = 0;
  var total_bitter_16 = 0;
  var btw_21;
  var btw_9;
  var btw_totaal;
  var totaal;
  const fris_Price = 2.00;
  const bier_Price = 2.50;
  const wijn_Price = 3.00;
  const bitter_8 = 5.00;
  const bitter_16 = 9.00;

  //Laat de gebruiker een bestelling invoeren en controleert daarna de invoer. Indien een correcte invoer is gedaan, vraag naar het aantal van de ingevoerde bestelling.
  function addOrder() {
    typeOfOrder = prompt('Welke bestelling wilt u toevoegen?').toLowerCase();

    if (typeOfOrder == 'fris' || typeOfOrder == 'wijn' || typeOfOrder == 'bier') {
      amountOfOrder = prompt(`Hoeveel ${typeOfOrder} wilt u toevoegen aan uw bestelling?`);
      if (isNaN(parseInt(amountOfOrder))) {
        orderError();
      } else {
        calcPrices();
        askForOrder();
      }

    } else if (typeOfOrder == 'stop') {
      showTotal();

    } else if (typeOfOrder == 'snack') {
      typeOfOrder = prompt(`Hoeveel bitterballen wilt u toevoegen (8 of 16)?`);
      if (typeOfOrder == '8' || typeOfOrder == '16') {
        amountOfOrder = prompt(`Hoeveel bitterbalschalen van ${typeOfOrder} stuks wilt u bestellen?`);
        if (isNaN(parseInt(amountOfOrder))) {
          orderError();
        } else {
          calcPrices();
          askForOrder();
        }
      } else {
        orderError();
      }
    } else {
      orderError();
    }
  }

  //Vertel de gebruiker dat die een ongeldige invoer heeft gedaan en start het bestelproces opnieuw op.
  function orderError() {
    alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
    addOrder();
  }

  //Bereken de prijs nadat een bestelling is gedaan.
  function calcPrices() {
    switch (typeOfOrder) {
      case 'fris':

        amountOfSoda += parseInt(amountOfOrder);
        totalSoda += parseFloat(fris_Price) * parseInt(amountOfOrder);
        totalCost += parseFloat(fris_Price) * parseInt(amountOfOrder);
        break;
      case 'bier':
        amountOfBeer += parseInt(amountOfOrder);
        totalBeer += bier_Price * parseInt(amountOfOrder);
        totalCost += bier_Price * parseInt(amountOfOrder);
        break;
      case 'wijn':
        amountOfWine += parseInt(amountOfOrder);
        totalWine += wijn_Price * parseInt(amountOfOrder);
        totalCost += wijn_Price * parseInt(amountOfOrder);
        break;
      case '8':
        amountOfBitter_8 += parseInt(amountOfOrder);
        total_bitter_8 += bitter_8 * parseInt(amountOfOrder);
        totalCost += bitter_16 * parseInt(amountOfOrder);
        break;
      case '16':
        amountOfBitter_16 += parseInt(amountOfOrder);
        total_bitter_16 += bitter_16 * parseInt(amountOfOrder);
        totalCost += bitter_16 * parseInt(amountOfOrder);
        break;
      default:
        break;
    }

  }

  //Laat de gebruiker de rekening zien met de kosten per bestelling en de totale kosten.
  function showTotal() {
    document.getElementById('hide').style.display = 'none';
    document.getElementById('rekening').style.display = 'block';
    var d = new Date();

    document.getElementById('currentDate').innerHTML = d.toString().slice(0, 24);

    if (amountOfSoda > 0) {

      document.getElementById('amount-fris').innerHTML = amountOfSoda.toString();
      document.getElementById('thing-fris').innerHTML = 'Fris';
      document.getElementById('pricePiece-fris').innerHTML = '&euro;' + fris_Price.toString() + ',00';
      document.getElementById('price-fris').innerHTML = '&euro;' + totalSoda.toString() + ',00';
    }
    if (amountOfBeer > 0) {
      document.getElementById('amount-bier').innerHTML = amountOfBeer.toString();;
      document.getElementById('thing-bier').innerHTML = 'Bier';
      document.getElementById('pricePiece-bier').innerHTML = '&euro;' + bier_Price.toString() + '0';
      document.getElementById('price-bier').innerHTML = '&euro;' + totalBeer.toFixed(2).toString();
    }
    if (amountOfWine > 0) {

      document.getElementById('amount-wijn').innerHTML = amountOfWine.toString();
      document.getElementById('thing-wijn').innerHTML = 'Wijn';
      document.getElementById('pricePiece-wijn').innerHTML = '&euro;' + wijn_Price.toString() + ',00';
      document.getElementById('price-wijn').innerHTML = '&euro;' + totalWine.toString() + ',00';
    }
    if (amountOfBitter_8 > 0) {

      document.getElementById('amount-bitter_8').innerHTML = amountOfBitter_8.toString();
      document.getElementById('thing-bitter_8').innerHTML = 'Bitterballen (8 stuks)';
      document.getElementById('pricePiece-bitter_8').innerHTML = '&euro;' + bitter_8.toString() + ',00';
      document.getElementById('price-bitter_8').innerHTML = '&euro;' + total_bitter_8.toString() + ',00';
    }
    if (amountOfBitter_16 > 0) {

      document.getElementById('amount-bitter_16').innerHTML = amountOfBitter_16.toString();
      document.getElementById('thing-bitter_16').innerHTML = 'Bitterballen (16 stuks)';
      document.getElementById('pricePiece-bitter_16').innerHTML = '&euro;' + bitter_16.toString() + ',00';
      document.getElementById('price-bitter_16').innerHTML = '&euro;' + total_bitter_16.toString() + ',00';
    }
    document.getElementById('nett-total').innerHTML = '&euro;' + totalCost.toFixed(2).toString();

    /*Bereken de BTW-Tarieven voor de verschillende bestellingen:
      9% BTW: fris, bitterballen(8 stuks), bitterballen(16 stuks).
      21% BTW: bier, wijn.*/
    btw_9 = 0.09 * (totalSoda + total_bitter_8 + total_bitter_16);
    btw_21 = 0.21 * (totalBeer + totalWine);
    btw_totaal = btw_9 + btw_21;

    if (btw_9 > 0) {
      document.getElementById('btw-9').innerHTML = '&euro;' + btw_9.toFixed(2).toString();
      document.getElementById('btw-rij-9').style.display = 'table-row';
    }
    if (btw_21 > 0) {
      document.getElementById('btw-21').innerHTML = '&euro;' + btw_21.toFixed(2).toString();
      document.getElementById('btw-rij-21').style.display = 'table-row';

    }

    document.getElementById('btw-totaal').innerHTML = '&euro;' + btw_totaal.toFixed(2).toString();

    totaal = btw_totaal + totalCost;
    document.getElementById('final-total').innerHTML = '&euro;' + totaal.toFixed(2).toString();
  }

  //Vraag de gebruiker of die nog een bestelling wilt plaatsen.
  function askForOrder() {
    more = confirm('Wil je nog een bestelling toevoegen?');
    if (more == true) {
      addOrder();
    }
  }

  //Start het bestelproces wanneer de gebruiker op de bestelknop klikt.
  document.getElementById('order').onclick = function() {
    addOrder();

  }
}
