import GeraCPF from "./modules/GeraCPF";

import './assets/css/style.css';

function start(){
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCPF()
    console.log('t')
}
start()