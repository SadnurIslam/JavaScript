let countA = 0;
const str = "This is a sample string to count the letter 'a' in it.";
for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a') {
        countA++;
    }
}
console.log(countA);

countA = 0;

for(const char of str) {
    if(char === 'a') {
        countA++;
    }
}

console.log(countA);