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
