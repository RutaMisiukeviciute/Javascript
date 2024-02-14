/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const divOutput = document.querySelector(".output-cointainer> #output");

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#message").remove();
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      data.forEach(user => {
        const divUser = document.createElement("div");
        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode(user.login);
        h2.append(h2Text);
        const img = document.createElement("img");
        img.setAttribute("src", user.avatar_url);
        img.setAttribute("alt", `${user.login} avatar`);
        divUser.append(h2, img);
        divOutput.append(divUser);
      });
    });
});
