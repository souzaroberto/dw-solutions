let bandeiras = [{chave:'Brasil', valor:"http://flags.fmcdn.net/data/flags/w580/br.png"},{chave:'Argentina', valor:"http://flags.fmcdn.net/data/flags/w580/ar.png"},{chave:'Estados Unidos', valor:"http://flags.fmcdn.net/data/flags/w580/us.png"},{chave:'Espanha', valor:"http://flags.fmcdn.net/data/flags/w580/es.png"},{chave:'Itália', valor:"http://flags.fmcdn.net/data/flags/w580/it.png"},{chave:'Grécia', valor:"http://flags.fmcdn.net/data/flags/w580/gr.png"},{chave:'Alemanha', valor:"http://flags.fmcdn.net/data/flags/w580/de.png"},{chave:'Reino Unido', valor:"http://flags.fmcdn.net/data/flags/w580/gb.png"},{chave:'França', valor:"http://flags.fmcdn.net/data/flags/w580/fr.png"},{chave:'Japão', valor:"http://flags.fmcdn.net/data/flags/w580/jp.png"}];

let acertos = 0;
let tentativas = 0;
let rodada = 0;
flag = document.getElementById("flag");
rodada = Math.floor((Math.random() * 10));
flag.src = bandeiras[rodada].valor;

function escolhidos(){
  escolha = document.getElementById("entrada").value;
  if (escolha == bandeiras[rodada].chave){
    acertos++;
    tentativas++;
  }
  else{
    tentativas++;
  }
  document.getElementById("acerto").innerHTML = "Acertos: "+acertos
  document.getElementById("tentativa").innerHTML = "Tentativas: "+tentativas
  rodada = Math.floor((Math.random() * 10));
  flag.src = bandeiras[rodada].valor;
}

function pular(){
  tentativas++
  rodada = Math.floor((Math.random() * 10));
  flag.src = bandeiras[rodada].valor;
  document.getElementById("tentativa").innerHTML = "Tentativas: "+tentativas
}

