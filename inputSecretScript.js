const secretArray = new Array()

document.querySelector('#submit-secret').addEventListener('click', e => {
  const secretText = document.querySelector('#input').value
  if (secretText.length > 0) {
    secretArray.push(secretText)
    renderSecretArray()
    document.querySelector('#input').value = ''
  }
})

const renderSecretArray = () => {
  document.querySelector('#secrets').innerHTML = ''
  secretArray.forEach((secret, index) => {
    console.log(secret)
    const secretDiv = document.createElement('div')
    const secretText = 'User ' + (index + 1) + ' said: ' + secret
    secretDiv.appendChild(document.createTextNode(secretText))
    document.querySelector('#secrets').appendChild(secretDiv)
  })
}
