let G = document.getElementById('grey');
let x = document.getElementById('malik');
G.addEventListener('click', function () {
  document.body.style.backgroundColor = 'grey';
  x.innerText = 'this color is grey';
  G.style.display = 'none';
  W.style.display = 'inline-flex';
  B.style.display = 'inline-flex';
  Y.style.display = 'inline-flex';
});
let W = document.getElementById('white');
W.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  x.innerText = 'this color is white';
  W.style.display = 'none';
  G.style.display = 'inline-flex';
  B.style.display = 'inline-flex';
  Y.style.display = 'inline-flex';
});
let B = document.getElementById('blue');
B.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
  x.innerText = 'this color is blue';
  B.style.display = 'none';
  G.style.display = 'inline-flex';
  W.style.display = 'inline-flex';
  Y.style.display = 'inline-flex';
});
let Y = document.getElementById('yellow');
Y.addEventListener('click', () => {
  document.body.style.backgroundColor = 'yellow';
  x.innerText = 'this color is yellow';
  Y.style.display = 'none';
  G.style.display = 'inline-flex';
  W.style.display = 'inline-flex';
  B.style.display = 'inline-flex';
});
