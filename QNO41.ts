// QNO:41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



function showmagicians1(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}


const magiciansname: string[] = ["mian afzal rasheed", "sabir ali", "shahrukh", "ali raza"];


showmagicians1(magiciansname);
