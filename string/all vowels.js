const str = "A lazy fox is jumped over the lazy dog";
const vowels = ['a', 'e', 'i', 'o', 'u'];

let count = 0;

for(const vowel of vowels){
    if(str.toLowerCase().includes(vowel)){
        count++;
    }
}

if(count==5){
    console.log("All vowels are present");
}
else{
    console.log("Not all vowels are present");
}