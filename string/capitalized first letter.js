let str = "a lazy fox is jumped over the lazy dog";

const word = str.split(' ');

console.log(word);

for(let i=0;i<word.length;i++){
    // console.log(word[i][0].toUpperCase());
    word[i] = word[i][0].toUpperCase()+word[i].slice(1);
    // const temp = word[i].split('');
    // temp[0] = temp[0].toUpperCase(); 
    // console.log(temp);
}

str = word.join(' ');

console.log(str); // Output: "A Lazy Fox Is Jumped Over The Lazy Dog"