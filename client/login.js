let container = document.querySelector('.login_box');// caixa toda

let login = document.querySelector('.login');// parte do login
document.body.removeChild(login)

let singUp = document.querySelector('.signUp');// parte do sing up

let change_signUp = document.querySelector('.change_singUp');// parte para trocar para signUp

let change_login = document.querySelector('.change_login');// parte para trocar para login

let button_signUp = document.getElementById('change-button_signUp')// parte para trocar para sign up

let button_login = document.getElementById('change-button_login')// parte para trocar para login

document.body.removeChild(change_signUp)







const mudar_para_signUp = () => {
    container.removeChild(change_login);
    container.appendChild(change_signUp);
    container.removeChild(singUp)
    container.appendChild(login)
}
const mudar_para_login = () => {
    container.removeChild(change_signUp)
    container.appendChild(singUp)
    container.appendChild(change_login)
    container.removeChild(login)
    
}




button_login.addEventListener('click', mudar_para_signUp)
button_signUp.addEventListener('click', mudar_para_login)