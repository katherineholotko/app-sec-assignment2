document.querySelector('#submit-user').addEventListener('click', e => {
  const usernameTyped = document.querySelector('#username').value
  const passwordTyped = document.querySelector('#password').value
  if (data[usernameTyped] == passwordTyped) {
    location.assign(
      window.location.pathname.replace('index.html', '') + 'secret.html'
    )
  } else {
    alert('Password was incorrect or user is not valid')
  }
})
