# Horeca App

In de stad komt een nieuw Café-Bar waar je lekker met je vrienden drankjes en ook lekkere hapjes kunt bestellen. De naam van de Café-Bar bedenk je zelf. De Café-Bar vraagt aan jou om een JS applicatie te maken zodat ze gemakkelijk de bestellingen kunnen bijhouden en uiteraard moet je ook de rekening kunnen opvragen.

 

Je gaat eerst aan de slag met alleen de drankjes, als de JS applicatie goed werkt dan ga je daarna toevoegen dat je ook hapjes kunt bestellen. Bij het programmeren van de JS applicatie moet je uiteraard functies gebruiken. De volgende functies dienen aanwezig te zien: tonen van de rekening, toevoegen van bestellingen en het uitrekenen van de prijzen. Bedenk hiervoor zelf goede functienamen!

 

De bestellingen worden via een __prompt__ ingevoerd. Het proces van bestellingen invoeren werkt als volgt:

Je krijgt de vraag 'Welke bestelling wilt u toevoegen?'
Je kunt nu opgeven welk drankje je wilt bestellen. Je kunt intypen 'fris', 'bier' of 'wijn'
Daarna krijg je de vraag 'Hoeveel naam-drankje wilt u toevoegen aan uw bestelling. Als je bijvoorbeeld 'fris' heb ingevuld dan wordt de vraag 'Hoeveel fris wilt u toevoegen aan uw bestelling'. Dus waar naam-drankje staat toon je welk drankje je gaat bestellen
Daarna ga je automatisch weer terug naar stap 1. Kortom je kunt dan weer een nieuwe bestelling invoeren.
Als je de rekening wilt hebben dan voer je bij de vraag ''Welke bestelling wilt u toevoegen?' het woordje 'stop' in en dan wordt de rekening naar het scherm geprint. In de rekening worden alle gedane bestellingen netjes getoond met het aantal en de naam van het drankje. Laat ook per type drankje zien wat de kosten zijn en uiteraard moet je ook de totaalprijs tonen. Je mag geen drankjes in de rekening tonen die je niet hebt besteld.

 

Je kunt alleen drankjes bestellen die op de kaart staan, dus je moet invoercontrole doen op de drankjes die je besteld. Als je iets anders dan 'fris', 'bier' of 'wijn' invult krijg je een melding ''U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.' en dan ga je automatisch weer terug naar stap 1.

 

## Uitbreiding met bitterballen bestellen

Breid de JS applicatie uit zodat je ook schalen met bitterbalen kunt bestellen. Het proces bitterballen bestellen werkt als volgt:

1. Je krijgt de vraag 'Welke bestelling wilt u toevoegen?'
2. Je type het woord 'snack' in.
3. Je krijgt de vraag 'Hoeveel bitterballen wilt u toevoegen (8 of 16)?'
4. Je krijgt de vraag 'Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?' Bij aantal komt te staan 8 of 16 afhankelijk van wat je invoert
5. Daarna ga je automatisch weer terug naar stap 1. Kortom je kunt dan weer een nieuwe bestelling invoeren.

 

Als je bij punt 3 een ander getal dan 8 of 16 invoert dan krijg je de melding 'U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.' en dan begin je weer bij stap 1.

 

Naast de functionele eisen gaan we ook letten op het volgende:

- Opdracht ingeleverd op GitHub
- Minimaal 1 x per dag gecommit
- Naamgeving van variabelen en functienamen is duidelijk en self explaining
- Code is netjes en correct uitgelijnd
- Er is commentaar toegevoegd op stukjes code die lastigere te begrijpen zijn. In ieder geval geef je in het kort per functie aan wat deze doet
- Zorg voor een mooi gestylde html pagina en de opmaak regel je uiteraard in de css
- Je bepaalt zelf de prijzen voor de drankjes en de schalen met bitterballen
