const evento = document.getElementById('enviar')
const enviarFormulario =() => {
        let nombre = document.getElementById('Name').value;
        let phone = document.getElementById('Phone').value;
        let Email = document.getElementById('Email').value;
        let mensaje = document.getElementById('message').value;

        let asunto = 'Nombre: ' + nombre + '\n Telefono: ' + phone + '\n Correo: ' + Email + '\n Asunto: ' + mensaje

        window.open(`https://wa.me/+573017134534?text=${asunto}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)