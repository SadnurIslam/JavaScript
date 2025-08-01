let countA = 0;
const str = "This is aAa and no A is aB ccs a";

for(let i = 0; i < str.length; i++) {
    if(str[i]=='a' || str[i]=='A'){
        countA++;
    }
}

console.log(countA);