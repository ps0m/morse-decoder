const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const MORSE_TABLE_ONE_ZERO = {};
for (key in MORSE_TABLE) {
    let mt='';
    [key].splice("").map(function (x){
        for (point of x) {
            if (point===".") {
                mt +="10"
            } if (point=== "-") {
                mt += "11"
            } 
        } 
        while (mt.length<10) {
            let doubleZero = "00";
            mt = doubleZero.concat(mt);
        }  
       
    return MORSE_TABLE_ONE_ZERO[mt] = MORSE_TABLE[key];
   });  
}
MORSE_TABLE_ONE_ZERO["**********"] = " ";

console.log(MORSE_TABLE_ONE_ZERO);

function decode(expr) {
    let word = '';
    for (i=0; i<expr.length; i+=10 ){
        if (i === " ") {
            word += " ";
        }
        word += MORSE_TABLE_ONE_ZERO[expr.slice(i, i+10)]; 
    }
    return word;    
}

module.exports = {
    decode
}

// console.log(decode('00000011110000000010'));