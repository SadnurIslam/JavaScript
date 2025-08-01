/*

    Declare an array of 3 tourist destinations
    Add a new tourist destination to your tourist array
    Add two more to your array
    Remove the last tourist destination you have added
    display the final array as output

*/

const dest = ["Sylhet", "Cox Bazar", "Sundarbans"];
console.log(dest);

dest.push("Sajek");
dest.push("Bandarban");
dest.push("Rangamati");
console.log(dest);

dest.pop();
console.log(dest);