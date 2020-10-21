const jedi = [];

jedi[0] = "Luke";

jedi.push("Obi-Wan Kenobi");

jedi.unshift("Yoda");
console.log(jedi[1]);

jedi.splice(2, 1);

jedi.shift();
console.log(jedi);

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

console.log(starWarsVillains.slice(0,2));

const droids = {
    astromech: "R2D2",
    protocol: "CP3O",
    assassin: "IG-88"
};

console.log(droids["astromech"]);

console.log(droids.protocol);

droids.assassin = "IG-11";
console.log(droids.assassin);