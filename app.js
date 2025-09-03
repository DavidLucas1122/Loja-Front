'use strict'



const frases = [
  "Apartamento",
  "Carro",
  "Celular"
];

const input = document.getElementById("campo");

let fraseIndex = 0;
let charIndex = 0;
let digitando = true;

function digitar() {
  const fraseAtual = frases[fraseIndex];

  if (digitando) {
    if (charIndex <= fraseAtual.length) {
      input.placeholder = ` Buscar "${fraseAtual.substring(0, charIndex)}"`;
      charIndex++;
      setTimeout(digitar, 100); // velocidade de digitação
    } else {
      digitando = false;
      setTimeout(digitar, 1500); // pausa ao final da frase
    }
  } else {
    if (charIndex > 0) {
      input.placeholder = ` Buscar "${fraseAtual.substring(0, charIndex)}"`;
      charIndex--;
      setTimeout(digitar, 50); // velocidade de apagar
    } else {
      digitando = true;
      fraseIndex = (fraseIndex + 1) % frases.length; // próxima frase
      setTimeout(digitar, 500); // pequena pausa antes da próxima
    }
  }
}
digitar();

import produtos from './produtos.json' with { type: 'json' }
const container = document.getElementById("container")

let grupoDiv // variável para armazenar a div atual

produtos.forEach((produto, index) => {
  // A cada 5 produtos cria uma nova div
  if (index % 4 === 0) {
    grupoDiv = document.createElement("div")
    grupoDiv.classList.add("caixa")
    container.appendChild(grupoDiv)
  }

  const card = document.createElement("div")
  card.classList.add("card")


  const img = document.createElement("img")
  img.src = `./img/${produto.imagem}`
  img.alt = produto.nome

  const nome = document.createElement('p')
  nome.textContent = produto.nome
  nome.classList.add("nome")

  const preco = document.createElement('p')
  preco.textContent = produto.preco
  preco.classList.add("preco")

  const descricao = document.createElement('p')
  descricao.textContent = produto.descricao

  const estrelas = document.createElement('div')
  estrelas.classList.add('estrelas')
  estrelas.textContent = '★'.repeat(produto.classificacao) + '☆'.repeat(5 - produto.classificacao)

  card.addEventListener("click", () => {
    alert(`Você clicou em: ${produto.nome}`)
  })



  card.append(img, nome, preco, descricao, estrelas)
  grupoDiv.appendChild(card)
})

