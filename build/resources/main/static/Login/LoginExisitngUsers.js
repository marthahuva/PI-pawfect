const LoginForm = document.querySelector("login-form")
LoginForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('email', 'password')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        return alert('Usuario y/o contraseña incorrecta.')
    }
    alert(`Bienvenido ${validUser.name}`)
    window.location.href = "index.hmtl"


})
