const count = document.querySelector('#count')
const address = document.querySelector('#address')
const submit = document.querySelector('input[type=submit]')
const pingResult = document.querySelector('#pingResult')

submit.addEventListener('click', function(event) {
  event.preventDefault()
  const url = `../api/ping.php?count=${count.value}&address=${address.value}`
  fetch(url)
    .then(res => res.json())
    .then(json => loadPing(json))
})

function loadPing(ping) {
  pingResult.innerHTML = ping.response
}