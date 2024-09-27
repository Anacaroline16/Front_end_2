// const titulo = document.querySelector('h1');

// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)

// titulo.textContent = 'Meu novo parágrafo';

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.setAttribute('href', 'https://www.ifro.edu.br');
ancora.setAttribute('target', '_black');
ancora.text = 'IFRO'
ancora.style.color = 'green'
ancora.style.fontWeight = 'bold'
body.appendChild(ancora);

const titulo = document.querySelector('h1');
titulo.remove();


const lista = document.createElement('ul');
const ponto_1 = document.createElement('li');
const ponto_2 = document.createElement('li');
const ponto_3 = document.createElement('li');
ponto_1.textContent= 'item-1';
ponto_2.textContent = 'item-2';
ponto_3.textContent = 'item-3';
body.appendChild(lista);
lista.appendChild(ponto_1);
lista.appendChild(ponto_2);
lista.appendChild(ponto_3);


