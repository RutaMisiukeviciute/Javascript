/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const divOutout = document.querySelector(".wrapper > #output");

document
  .querySelector('.wrapper > form')
  .addEventListener('submit', e => {
    e.preventDefault();
    const svoris = e.target.search.value;
    const parLb = document.createElement("p");
    const parLbText = document.createTextNode(`Svoris svarais yra: ${svoris * 2.2046} lb.`);
    parLb.append(parLbText);
    const parG = document.createElement("p");
    const parGText = document.createTextNode(`Svoris gramais yra: ${svoris / 0.0010000} g.`);
    parG.append(parGText);
    const parOz = document.createElement("p");
    const parOzText = document.createTextNode(`Svoris uncijomis yra: ${svoris * 35.274} oz.`);
    parOz.append(parOzText);

    divOutout.append(parLb, parG, parOz)
  });