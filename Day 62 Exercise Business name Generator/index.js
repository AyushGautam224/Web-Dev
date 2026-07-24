/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 
Shop Name:
Engine
Foods
Garments
Another Word:
Bros
Limited
Hub
*/

function getRandomWord1() {
  const r = Math.floor(Math.random() * 3);
  if (r === 0) return "Crazy";
  else if (r === 1) return "Amazing";
  else return "Fire";
}
let Adjectives = getRandomWord1();


function getRandomWord2() {
  const r = Math.floor(Math.random() * 3);
  if (r === 0) return "Engine";
  else if (r === 1) return "Foods";
  else return "Garments";
}

let ShopName = getRandomWord2();


function getRandomWord3() {
  const r = Math.floor(Math.random() * 3);
  if (r === 0) return "Bros";
  else if (r === 1) return "Limited";
  else return "Hub";
}
let AnotherWord = getRandomWord3();

console.log(Adjectives, ShopName, AnotherWord);
