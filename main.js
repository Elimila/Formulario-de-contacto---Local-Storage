



//Mostrar los datos de los contactos guardados en el DOM

//Crea botón para borrar todos los contactos guardados en Local Storage

localStorage.removeItem('contact')

//Crea botón para borrar un contacto en concreto de Local Storage.



const contsclient = document.getElementById('clients');
const buttonsend = document.getElementById('sendButton');
const clearAllButton = document.getElementById('clearAll');
const inputName = document.getElementById('userName');
const inputEmail = document.getElementById('userEmail');
const inputMessage = document.getElementById('userMessage');
const userContact = document.getElementById('contact');
const userImage = document.getElementById('imageUrl');





function onSubmit(event) {
event.preventDefault()
formData()
const dataDom = JSON.parse(localStorage.getItem('dataDom'))

}

function formData() {
  localStorage.setItem('userContact',JSON.stringify({
    userName    : userName.value,
    userEmail   : userEmail.value,
    userMessage : userMessage.value,
    imageUrl    : imageUrl.value,

  }))

}


sendButton.addEventListener('click', onSubmit)

















