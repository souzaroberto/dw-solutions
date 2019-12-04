const ip = document.getElementById('ip')
const count = document.getElementById('count')
const submit = document.querySelector('input[type=submit]')
const pingMessage = document.querySelector('#ping-message')

submit.addEventListener('click', function(event) {
  event.preventDefault()
  const url = `../api/ping.php?ip=${ip.value}&count=${count.value}`
  fetch(url)
    .then(res => res.json())
    .then(json => loadPing(json))
})

function loadPing(message) {
  pingMessage.innerHTML = message.body
}