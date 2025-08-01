const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]);

colors['passenger capacity'] = 100; // Adding a new property

console.log(colors);

let countKeys = 0;

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

countKeys = Object.keys(student).length; 

console.log('Number of keys in student object:', countKeys);

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const key in myObject) {
    console.log("Key: "+key+ " | value: "+myObject[key]+" | Type: "+typeof myObject[key]);
}