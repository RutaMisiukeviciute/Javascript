/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const divOutput = document.querySelector("#output");
fetch(`cars.json`)
  .then(res => res.json())
  .then(data => {
    data.forEach(car => {
      const divCar = document.createElement("div");
      const h2 = document.createElement("h2");
      const h2Text = document.createTextNode(car.brand);
      h2.append(h2Text);
      divCar.append(h2);
      car.models.forEach(model => {
        const par = document.createElement("p");
        const parText = document.createTextNode(model);
        par.append(parText);
        divCar.append(par);
      });
      divOutput.append(divCar);
    });
  })
