const socket = io();

/**
 * Seccion productos
 */

const list = document.getElementById('list-products');
console.log(list, 'loglist');
const products = fetch('http://localhost:8080/productos-test').then(response => response.json()).then(data => data.forEach(obj => list.innerHTML += 
    `
        <h6>${obj.title}</h6>
        <p>$${obj.price}</p>
        <img src="${obj.image}" style="height: 30px; width: 30px;">
    `)); 

/**
 * Seccion chat
 */
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let alias = document.getElementById('alias');
let email = document.getElementById('email');
let avatar = document.getElementById('avatar');

let message = document.getElementById('message');

let btn = document.getElementById('send');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    socket.emit('client:mensaje', {
        author: {
            id: email.value,
            nombre: nombre.value,
            apellido: apellido.value,
            edad: edad.value,
            alias: alias.value,
            avatar: avatar.value
        },
        text: message.value
    });
    message.value = '';
})

socket.on('connection', console.log('on desde client'))
socket.on('server:newmessage', msjs => {
    loadMsj(msjs);
})
const addMsj = msj => {
    output.innerHTML += `<p>${msj.author.id}:${msj.text}</p>`;
    console.log(msj);
}

const loadMsj = msjs => {
    console.log(msjs);
    output.innerHTML = "";
    msjs.forEach(msj => addMsj(msj));
}