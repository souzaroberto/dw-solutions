function getBandeira() {
    let gerador = Math.floor((Math.random()) * 10);
    let bandeiras = [{ flag: 'Brasil', img: 'http://flags.fmcdn.net/data/flags/w580/br.png' }, { flag: 'Argentina', img: 'https://flagpedia.net/data/flags/w580/ar.png' }, { flag: 'Bolivia', img: 'https://flagpedia.net/data/flags/w580/bo.png' }, { flag: 'Canada', img: 'https://flagpedia.net/data/flags/w580/ca.png' }, { flag: 'Finlandia', img: 'https://flagpedia.net/data/flags/w580/fi.png' }, { flag: 'Israel', img: 'https://flagpedia.net/data/flags/w580/il.png' }, { flag: 'Nigeria', img: 'https://flagpedia.net/data/flags/w580/ng.png' }, { flag: 'Ucrania', img: 'https://flagpedia.net/data/flags/w580/ua.png' }, { flag: 'Congo', img: 'https://flagpedia.net/data/flags/w580/cg.png' }, { flag: 'Luxemburgo', img: 'https://flagpedia.net/data/flags/w580/lu.png' }]
    let ele1 = document.querySelector("#imagem")
    let ele2 = document.querySelector("#country")
    ele1.src = bandeiras[gerador].img
    ele2.value = bandeiras[gerador].flag
  }
  
  function getTestador() {
    let answer = document.querySelector("#country")
    let response = document.querySelector("#resposta")
    let a = answer.value
    let r = response.value
    let acertos = document.querySelector("#acertos")
    let tentativas = document.querySelector("#tentativas")
    ac = acertos.textContent
    ten = tentativas.textContent
  
    if (String(a) == String(r)) {
      console.log('Acertou!')
      acertos.textContent = Number(ac) + 1
    }
    else {
      console.log('Errou')
    }
    tentativas.textContent = Number(ten) + 1
  }