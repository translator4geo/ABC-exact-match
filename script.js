var alphabet = {
  a: 'ა',
  b: 'ბ',
  c: 'ც',
  d: 'დ',
  e: 'ე',
  f: 'ფ',
  g: 'გ',
  h: 'ჰ',
  i: 'ი',
  j: 'ჯ',
  k: 'კ',
  l: 'ლ',
  m: 'მ',
  n: 'ნ',
  o: 'ო',
  p: 'პ',
  q: 'ქ',
  r: 'რ',
  s: 'ს',
  t: 'ტ',
  u: 'უ',
  v: 'ვ',
  w: 'წ',
  x: 'ხ',
  y: 'ყ',
  z: 'ზ',
  S: 'შ',
  C: 'ჩ',
  W: 'ჭ',
  R: 'ღ',
  T: 'თ',
  Z: 'ძ',
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
