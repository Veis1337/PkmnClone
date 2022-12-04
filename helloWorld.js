// const pkmn = ["Quilava", "Typhlosion", "Tropius", "Absol", "Flygon"];
// let count = 0;
// while (count < pkmn.length) {
//     console.log(pkmn[count]);
//     count++;    
// }

// pkmn.push("Castform");
// count = 0;
// while (count < pkmn.length) {
//     console.log(pkmn[count]);
//     count++;
// }

// for (let count = 0; count < pkmn.length; count++) {
//     console.log(pkmn[count]);
// }

// pkmn.splice(1, 1); // deletes typhlosion from the array
// for (let pokemon of pkmn) { 
//     console.log(pokemon);
// }

const chars = "abcdefgh";
const nums = "123456";

let total = "";
const crit1 = false;
const crit2 = true;

if (crit1) {
    total += chars;
}
if (crit2) {
    total += nums;
}

function randChar() {
    let rand = Math.random() * total.length;
    // console.log(rand);
    rand = Math.floor(rand);
    // console.log(rand);
    // console.log(chars[rand]);
    return total[rand];
}

let password = "";
console.log(password);

for (let i = 0; i < 32; i++) {
    password += randChar(); //password = password + randChar();
}

console.log(password);

let player = {
    x:0,
    y:0,
    name:"Abcz",
    inv:[],
}
player.health = 100;
let Pokeball = {
    name: "Pokeball",
    count: 0,
}
player.inv.push(Pokeball);

console.log(player);







