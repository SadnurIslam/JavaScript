let str = "x will replaced by y and X will replaced by Y";

const temp = str.split('');

for(let i = 0; i < temp.length; i++) {
    if(temp[i] == 'x'){
        temp[i] = 'y';
    }
    else if(temp[i] == 'X'){
        temp[i] = 'Y';
    }
}

str = temp.join('');

console.log(str);