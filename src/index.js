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

function decode(expr) {
    let word = '';
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
console.log(MORSE_TABLE_ONE_ZERO);

    // console.log (expr.split(""));
    // for (i=9; i<expr.length; i+=10 ){
        // console.log (expr[i], (i));
    // }
    
}

module.exports = {
    decode
}

console.log(decode('00000011110000000010'));