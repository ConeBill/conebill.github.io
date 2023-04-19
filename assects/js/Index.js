function escopo() {
    let visor = document.querySelector('.visor');
    let bntS = document.getElementById("s");
    let bntN = document.getElementById("n");
    bntS.addEventListener('click', yes);
    bntN.addEventListener('click', no);

    function yes() {
        //window.close();
    }
    function no() {
        bntN.classList.add('buttons');
        bntS.classList.add('buttons');
        document.querySelector(".titulo").textContent = 'Tem certeza?';
        document.querySelector(".frases").innerHTML = 'Eu acho que começamos com o pé direito... <br> Vamos tentar dnv? <br> clica no botão de voltar ai rapidão.';
        let bntV = document.createElement('button');
        let txt = document.createTextNode("Voltar");
        bntV.appendChild(txt);
        bntV.onclick = function() {
            window.history.go(0);
        }
        visor.appendChild(bntV);
        bntV.classList.add('button-55');
    }

    let lBnt = document.getElementById("lS");
    lBnt.addEventListener('mouseover', () => bntS.classList.add('buttons'));
    lBnt.addEventListener('mouseout', () => bntS.classList.remove('buttons'));
    document.getElementById("s").addEventListener('click', primeiro);
    function primeiro() {
        
    }
    document.getElementById("n").addEventListener('click', segundo);
    function segundo() {
        
    }
}
escopo();