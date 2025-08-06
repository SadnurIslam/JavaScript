const str = "I am learning Programming to become a programmer";
let longestWord = "";
let maxlen = 0;
const words = str.split(" ");
for(let i=0;i<words.length;i++){
    if(words[i].length > maxlen){
        maxlen = words[i].length;
        longestWord = words[i];
    }
}

console.log(longestWord);