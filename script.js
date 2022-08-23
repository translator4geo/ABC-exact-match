var alphabet = {
  ა: 'a',
  ბ: 'b',
  გ: 'g',
  დ: 'd',
  ე: 'e',
  ვ: 'v',
  ზ: 'z',
  თ: 'T',
  ი: 'i',
  კ: 'k',
  ლ: 'l',
  მ: 'm',
  ნ: 'n',
  ო: 'o',
  პ: 'p',
  რ: 'r',
  ს: 's',
  ტ: 't',
  უ: 'u',
  ფ: 'f',
  ქ: 'q',
  ღ: 'R',
  ყ: 'y',
  შ: 'S',
  ჩ: 'C',
  ც: 'c',
  ძ: 'Z',
  წ: 'w',
  ჭ: 'W',
  ხ: 'x',
  ჯ: 'j',
  ჰ: 'h',
  '!': '!',
  '?': '?',
  ',': ',',
  '.': '.',
 };

function generate() {
  const keys = Object.keys(alphabet);

  return (document.getElementById('letter').innerHTML =
    keys[Math.floor(Math.random() * keys.length)]);
}

function compare() {
  var output1 = '😁';
  var output2 = '😢';

  var question = document.getElementById('letter').innerHTML;
  var inputValue = document.getElementById('reply').value;
  for (i = 0; i < inputValue.length; i++) {
    if (inputValue[i] === question) {
      document.getElementById('emoji').innerHTML = output1;
    } else {
      document.getElementById('emoji').innerHTML = output2;
    }
  }
}
