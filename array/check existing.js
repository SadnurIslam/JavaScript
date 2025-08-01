/*

    Create an array of books containing different book.

    Use the includes method to check if the array contains a javascript book.

    Print a message to the console indicating whether the element is present in the array or not.

*/

const books = ["Big java", "C primer plus", "Operating systems concepts", "Math",["English1", "English2"]];
const hasMath = books.includes("Maths");
console.log(hasMath);
console.log(Array.isArray(books[4]));
console.log(books[4][1])