//Classe Casa
class CasaX{
    constructor(cidade,url,legenda) {
    this.c=cidade;
    this.u=url;
    this.l=legenda;
    }
}

// classe utilitária de Casa que se comunica com o servidor
class CasaServico {
    constructor(url){
        this.url = url;
    }

    listar(){
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }

    inserir(casa){
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(casa),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resposta => resposta.json()
        );
    }

    remover(id){
        return fetch(this.url+id, {
            method: "DELETE"
        }).then(resposta => resposta.json());
    }

}

// chama o serviço do usuário para listar os usuários
let servico = new CasaServico("https://my-json-server.typicode.com/gugawag/app-social/usuarios/");
/*servico.listar().then(casas => {
    for(let casa of casas){
        inserirElementoCasa(casas);
    }
});*/

// insere um elemento usuário no DOM
function inserirElementoCasa (casa) {
  let divmaior=document.createElement('div')
  divmaior.style.display = "inline-block";
  divmaior.style.margin = "3rem";
  let casanova=document.createElement("div");
  casanova.setAttribute("class","card");
  casanova.style.width = "15rem";
  casanova.setAttribute("id",casa.id);
  casanova.setAttribute("ondblclick","apagarCasa()")
  let imag=document.createElement("img");
  imag.setAttribute("src",casa.u);
  imag.setAttribute("class","card-image-top");
  imag.setAttribute("alt","Card image cap");
  imag.setAttribute("id",casa.id);
  imag.setAttribute("ondblclick","apagarCasa()")
  imag.style.height = "11rem";
  casanova.appendChild(imag);
  let corpo = document.createElement("div");
  corpo.setAttribute("class","card-body");
  let titulo = document.createElement("h1");
  titulo.setAttribute("class","card-title");
  titulo.textContent=casa.c;
  let legenda=document.createElement("p");
  legenda.textContent=casa.l;
  let link = document.createElement("a");
  link.textContent="Visitar";
  link.setAttribute("href","#");
  link.setAttribute("class","btn btn-primary");
  corpo.appendChild(titulo);
  corpo.appendChild(legenda);
  corpo.appendChild(link);
  casanova.appendChild(corpo);
  divmaior.appendChild(casanova)
  let onde=document.getElementById("secao");
  onde.appendChild(divmaior);
}

// trata click do botão inserior usuário
function inserirCasa(){
    event.preventDefault();
    let cidade = document.getElementById('cidade').value;
    let url = document.getElementById('url').value;
    let legenda = document.getElementById('legenda').value;

    let casinha = new CasaX(cidade,url,legenda);
    servico.inserir(casinha).then(
        casa => inserirElementoCasa(casinha)
    );
}

// trata click do botão apagar usuário
function apagarCasa() {
   let id = event.target.id;
   servico.remover(id).then(
       event.target.parentNode.remove()
   );
}








