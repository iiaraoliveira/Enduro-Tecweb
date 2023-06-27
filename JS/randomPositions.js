const telaDeVidas = document.getElementsByClassName("tela-de-vidas");
const telaDeEnergia = document.getElementsByClassName("tela-de-energia");


const numeroRandomico = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const pegarPosicao = () => {
  var posicao = new Object();

  posicao.left = numeroRandomico(0, 100);
  posicao.top = numeroRandomico(0, 100);
  posicao.right = numeroRandomico(0, 100);
  posicao.bottom = numeroRandomico(0, 100);

  return posicao;
};

const novoItem = (elemento) => {
  const item = novoElemento("div", `${elemento}`);
  const posicao = pegarPosicao();
  item.style.left = `${posicao.left}%`;
  item.style.top = `${posicao.top}%`;
  item.style.right = `${posicao.right}%`;
  item.style.bottom = `${posicao.bottom}%`;
  return item;
};

const novoConjuntoDeItens = (conjunto, elemento) => {
  const conjuntoDeElementos = novoElemento("div", `animacao ${conjunto}`);
  const quantidade = numeroRandomico(0, 5);
  for (let i = 0; i < quantidade; i++) {
    const item = novoItem(`${elemento}`);
    conjuntoDeElementos.appendChild(item);
  }
  return conjuntoDeElementos;
};

const removerUltimoConjuntoDaTela = (tela) => {
  setTimeout(() => {
    tela.removeChild(tela.lastChild);
  }, 10000);
};


const inserirNovoConjuntoNaTela = async (conjuntoAtual, tela) => {
    const valor = tela.insertBefore(conjuntoAtual, tela.children[0]);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(valor);
      }, 9900);
    });
  };

const inserirVidas = async () => {
  while (true) {
    const conjunto = novoConjuntoDeItens("vidas", "vida");
    await inserirNovoConjuntoNaTela(conjunto, telaDeVidas);
    removerUltimoConjuntoDaTela(telaDeVidas);
  }
};



const inserirEnergia = async () => {
    while (true) {
      const conjunto = novoConjuntoDeItens("energi", "gasolina");
      await inserirNovoConjuntoNaTela(conjunto, telaDeEnergia);
      removerUltimoConjuntoDaTela(telaDeEnergia);
    }
  };
inserirVidas(); 
