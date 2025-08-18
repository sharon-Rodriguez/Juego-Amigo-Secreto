let amigos = [];

function agregarAmigo(){
    const amigoInput = document.getElementById('amigo').value;

    if(amigoInput.trim() === ''){
        alert("Por favor, escribe un nombre");
        return;
    } else {
        amigos.push(amigoInput);
    }
    document.getElementById('amigo').value = '';


    actualizarLista()
}

function actualizarLista(){ 

const ul = document.querySelector('#listaAmigos');
ul.innerHTML = '';

for (const nombre of amigos){
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
}
}

function sortearAmigo(){

    if (amigos.length === 0 ){
        alert("No hay ningun nombre para sortear");
        return;
    }

    let indice = Math.floor(Math.random()* amigos.length);
    let amigoElegido = amigos[indice];
    
    document.querySelector('#resultado').innerHTML = 'Amigo sorteado es: ' + amigoElegido; 
}