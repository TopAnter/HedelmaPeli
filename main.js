let saldo = 100
let panos = 1

let kuviot = [[1, false], [1, false], [1, false], [1, false]]

document.getElementById("pyorayta").addEventListener("click", painallus)

document.getElementById("panosLasku").addEventListener("click", lasku)
document.getElementById("panosNosto").addEventListener("click", nosto)

function painallus(event){
    
}

function lasku(event){
    if(panos != 1){
        panos = panos - 1
        document.getElementById("panos").innerText = "Panos " + panos + " e"
    }else{
        document.getElementById("ilmoitus").innerText = "panosta ei voi laskea"
    }
    event.preventdefault()
}

function nosto(event){
    if(panos < 500){
        panos = panos + 1
        document.getElementById("panos").innerText = "Panos " + panos + " e"
    }else{
        document.getElementById("ilmoitus").innerText = "panos on jo maximissa"
    }
    event.preventdefault()
}

function kuvat(){
    for()
}