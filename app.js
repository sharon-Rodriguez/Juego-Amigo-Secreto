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