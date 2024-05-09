:root {
    --cor-de-fundo: #1E1E1E;
    --verde: #6FFF57;
    --branco: #FFFFFF;
    --botao-ativo: #3A375E;
    --botao-inativo: #3a375e80;
    --texto-fundo: #3a375e4d;
  }
  
  body {
    background-color: var(--cor-de-fundo);
    color: var(--branco);
  
  }
  
  .conteudo-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  
  .titulo-principal {
    text-align: left;
    width: 100%;
    font-size: 32px;
  
  }
  
  .titulo-principal span {
    color: var(--verde);
  }
  
  .botao {
    font-family: "Crakra Petch", sans-serif;
    background-color: var(--botao-inativo);
    color: var(--branco);
    display: flex;
    justify-content: center;
    padding: 1em;
    font-size: 18px;
    align-items: center;
    width: 100%;
  
    border-bottom: 4px solid var(--botao-ativo);
    border-left: 2px solid var(--botao-ativo);
    border-right: 2px solid var(--botao-ativo);
    border-top: none;
  }
  
  .botoes {
    display: block;
  }
  
  .botao.ativo {
    background-color: var(--botao-ativo);
    border-bottom: 4px solid var(--verde);
  }
  
  
  @media screen and (min-width: 768px) {
    .botoes {
        display: flex;
    }
  
    .botao:first-child {
        border-radius: 40px 40px 0 0;
    }
  }
  
  @media screen and (min-width: 768px) {
    .botoes {
        display: flex;
    }
  
    .botao:first-child {
        border-radius: 40px 0 0 0;
    }
  
    .botao:last-child {
        border-radius: 0 40px 0 0;
    }
  }
  
  .abas-textos {
    background-color: var(--texto-fundo);
    padding: 40px;
    border-radius: 0 0 40px 40px;
  }
  
  .aba-conteudo.ativo {
    display: block;
  }
  
  .aba-conteudo {
    display: none;
  }
  
  .aba-conteudo-titulo-principal{
    font-size: 30px;
    text-align: center;
  }
  
  .aba-conteudo-titulo-secundario{
    text-align: center;
    color: var(--verde);
    text-transform: uppercase;
  }
  
  
  @media screen and (min-width: 768px) {
    .botoes {
        display: flex;
    }
  
    .botao:first-child {
        border-radius: 40px 0 0 0;
    }
  
    .botao:last-child {
        border-radius: 0 40px 0 0;
    }
  }
  
  .contador{
    text-align: center;
    font-size: 50px;
  }