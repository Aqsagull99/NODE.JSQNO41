// QNO:41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showmagicians1(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magiciansname = ["mian afzal rasheed", "sabir ali", "shahrukh", "ali raza"];
showmagicians1(magiciansname);
