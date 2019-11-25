// classe Usuario
class Casa{
    constructor(nome, imagem){
        this.nome = nome;
        this.imagem = imagem;
    }
}

// classe utilitária de Usuário que se comunica com o servidor
class CasaServico{
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
//let casaServico = new CasaServico("https://my-json-server.typicode.com/gugawag/app-social/usuarios/");
//casaServico.listar().then(resp => console.log(resp))

function inicia() {
    document.getElementById("btnAdd").addEventListener("click", function(){
        let divM = document.getElementById("containerMain");
        let textM = document.getElementById("inputContent");
        let textM2 = document.getElementById("inputURL");

        let artc = document.createElement("article");
        let at = document.createAttribute("class");
        at.value = "card card-imagem mt-3";
        artc.setAttributeNode(at);
        divM.appendChild(artc);

        let img1 = document.createElement("img");
        let imgAt = document.createAttribute("class");
        imgAt.value = "card-imagem-top";
        let imgAt2 = document.createAttribute("src");
        imgAt2.value = textM2.value;
        img1.setAttributeNode(imgAt);
        img1.setAttributeNode(imgAt2);
        artc.appendChild(img1);

        let div1 = document.createElement("div");
        let divAt = document.createAttribute("class");
        divAt.value = "card-body";
        div1.setAttributeNode(divAt);
        img1.appendChild(div1);

        let p = document.createElement("p");
        let pAt = document.createAttribute("class");
        p.textContent = textM.value;
        pAt.value = "card-text text-justify";
        p.setAttributeNode(pAt);
        artc.appendChild(p);

        textM.value = "";
        textM2.value = "";
        textM.focus();
        textM2.focus();
    })
}

window.addEventListener("load", inicia);

function insereCasa(){
    event.preventDefault();
    let descricao = document.getElementById('inputContent').value;
    let imagem = document.getElementById('inputURL').value;
    let casa = new Casa(descricao, imagem);
    servico.inserir(casa).then(
        casa => inserirElementoCasa(casa)
    );
}