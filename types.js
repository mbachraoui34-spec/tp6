const nomClub = "Club Informatique";
const nbMembres = 42;
const cotisation = 25.5;
const ouvert = true;
let salle;
const responsable = null;
console.log("nomClub :", nomClub, typeof nomClub);
console.log("nbMembres :", nbMembres, typeof nbMembres);
console.log("cotisation :", cotisation, typeof cotisation);
console.log("ouvert :",ouvert , typeof ouvert);
console.log("salle :",salle , typeof salle);
console.log("responsable :",responsable , typeof responsable);
if (ouvert) {
var message1 = "déclarée avec var";
let message2 = "déclarée avec let";
}
//console.log(message1);
//console.log(message2);
const saisie = prompt("Combien d'ateliers suivez-vous ?");
console.log("Sans conversion :", Number(saisie) + 1);