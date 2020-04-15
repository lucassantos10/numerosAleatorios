function gerar() {
    let min = parseInt(document.getElementById('minimo').value);
    let max = parseInt(document.getElementById('maximo').value);
    
    document.getElementById('gerado').innerText = Math.floor(Math.random() * (max - min) ) + min;
}