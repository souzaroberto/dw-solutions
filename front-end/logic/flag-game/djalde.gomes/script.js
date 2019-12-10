let tents=10
let tenta=document.querySelector("#tentativas");
let pnts=0;
let pontos=document.querySelector("#pontuacao");
let cont=0;
let bandeiras = [{ nome: "brasil", fonte: "https://flagpedia.net/data/flags/w580/br.png" },{ nome: "reino unido", fonte: "https://flagpedia.net/data/flags/w580/gb.png" }, {nome: "russia", fonte: "https://flagpedia.net/data/flags/w580/ru.png" },{ nome: "argentina", fonte: "https://flagpedia.net/data/flags/w580/ar.png" },{ nome: "canada", fonte: "https://flagpedia.net/data/flags/w580/ca.png" },{ nome: "estados unidos", fonte: "https://flagpedia.net/data/flags/w580/us.png" },{ nome: "turquia", fonte: "https://flagpedia.net/data/flags/w580/tr.png" },{ nome: "israel", fonte: "https://flagpedia.net/data/flags/w580/il.png" },{ nome: "chile", fonte: "https://flagpedia.net/data/flags/w580/cl.png" },{ nome: "colombia", fonte: "https://flagpedia.net/data/flags/w580/co.png" }];
let digito=document.querySelector("#pais");
let pp=document.querySelector("#tente");

let bandeira=document.querySelector("#flg");
btn=document.querySelector("#conf");
btn2=document.querySelector("#pular");

btn.onclick = function def() {
  let d=digito.value;
  let abc=bandeira.getAttribute("src");
  
    if (cont < 9) {
      for (let y=0;y<bandeiras.length;y++) {
        if (abc === bandeiras[y].fonte) {
          var lol=bandeiras[y].nome;
        }
      }
        if (digito.value === lol ) {
          tents-=1;
          tenta.textContent=tents;
          cont+=1;
          pnts+=20;
          pontos.textContent=pnts;
          let x=rand=Math.floor(Math.random()*10);
          bandeira.setAttribute("src",bandeiras[x].fonte);
          pp.textContent="";
        } else {
        pp.textContent="Erowwww! try again or jump!"
        bandeira.setAttribute("src",abc);
    }
    } else if (cont === 9) { 
      for (let y=0;y<bandeiras.length;y++) {
        if (abc === bandeiras[y].fonte) {
          var lol=bandeiras[y].nome;
        }
      }
      if (digito.value === lol ) {
          tents-=1;
          tenta.textContent=tents;
          cont+=1;
          pnts+=20;
          pontos.textContent=pnts;
          let troca=document.querySelector("#corpo");
      troca.textContent=("fim de jogo");
      let bomb=document.querySelector("#bomba");
      bomb.textContent="";
      tenta.textContent="";
      }

    } else {

      let troca=document.querySelector("#corpo");
      troca.textContent=("fim de jogo");
      let bomb=document.querySelector("#bomba");
      bomb.textContent="";
      tenta.textContent="";
    }
    
}

btn2.onclick = function la() {
  let x=rand=Math.floor(Math.random()*10);
  bandeira.setAttribute("src",bandeiras[x].fonte)
  cont+=1;
  tents-=1;
  tenta.textContent=tents;
  if (tents < 1) {
    let troca=document.querySelector("#corpo");
      troca.textContent=("fim de jogo");
      let bomb=document.querySelector("#bomba");
      bomb.textContent="";
      tenta.textContent="";
  }

  
}


