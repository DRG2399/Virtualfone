const botoes = document.querySelectorAll('input[type=button]');


function writeNumber(event){ 
    document.querySelector('input[type=tel]').value += event.target.value;
}

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = writeNumber
}