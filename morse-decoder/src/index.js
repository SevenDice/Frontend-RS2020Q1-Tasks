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
  if (expr.length == 0) {
      return '';
      }    
  let i = 0;
  let line = expr;
  if ( line.length < 10 ) 
      for (i = 1; i <= (10-line.length); i++) line = '0'+line;
      while ( (line.length % 10) > 0 ) line = '0'+line;
  if ( ( (line.indexOf('*') !== -1) && (line.indexOf('**********') == -1) ) || ((line.split("*").length - 1) % 10) > 0 ) {
      return '';
  }
  i = 0;
  let full_line = '';
  let array_line = [];
      while(i <= line.length){
          if ( full_line !== '' && i % 10 == 0 ) {
              array_line.push(full_line);
              full_line='';
          }
          full_line = full_line + line[i];
              i++;
      }      
  i = 0;
  let line_result = '';
  while(i < array_line.length){
      full_line=array_line[i];
      full_line = full_line.split('**********').join(' ');
      full_line = full_line.split('11').join('-');
      full_line = full_line.split('10').join('.');
      full_line = full_line.split('0').join('');
      if (full_line!==' ') line_result = line_result + MORSE_TABLE[full_line];
      else line_result = line_result + full_line;
          i++;
  }
  return line_result
}

module.exports = {
  decode
}