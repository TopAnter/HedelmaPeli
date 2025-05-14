let saldo = 100
let panos = 1
let voitto = 0

let kuviot = [[0, false, false], [2, false, false], [3, false, false], [1, false, false]]
let kuvat = ["Kuvat/sitruuna.png", "Kuvat/luumu.png", "Kuvat/vesimelooni.png", "Kuvat/kirsikka.png", "Kuvat/seiska.png"]

document.getElementById("pyorayta").addEventListener("click", painallus)

document.getElementById("panosLasku").addEventListener("click", lasku)
document.getElementById("panosNosto").addEventListener("click", nosto)

document.getElementById("lukitse1").addEventListener("click", lukitus1)
document.getElementById("lukitse2").addEventListener("click", lukitus2)
document.getElementById("lukitse3").addEventListener("click", lukitus3)
document.getElementById("lukitse4").addEventListener("click", lukitus4)


function painallus(){
    if(saldo > panos){
        saldo = saldo - panos
        for (let i = 0; i < kuviot.length; i++){
            if(kuviot[i][2] == true){
                kuviot[i][2] = false
            }
            if(kuviot[i][1] == false){
                let arpa = Math.floor(Math.random() * 5)
                kuviot[i][0] = arpa                
            }else{
                kuviot[i][1] = false
                kuviot[i][2] = true
                document.getElementById("lukitse" + (i + 1)).innerText = "lukitse"
            }
        }
        kuvatPaikalleen()
        document.getElementById("saldo").innerText = "Saldo: "+ saldo +" e"
    }else{
        document.getElementById("ilmoitus").innerText = "ei tarpeeksi saldoa"
    }
}

function lasku(){
    if(panos != 1){
        panos = panos - 1
        document.getElementById("panos").innerText = "Panos " + panos + " e"
    }else{
        document.getElementById("ilmoitus").innerText = "panosta ei voi laskea"
    }

}

function nosto(){
    if(panos < 500){
        panos = panos + 1
        document.getElementById("panos").innerText = "Panos " + panos + " e"
    }else{
        document.getElementById("ilmoitus").innerText = "panos on jo maximissa"
    }

}

function lukitus1(){
    if(voitto == 0 && kuviot[0][2] == false){
        kuviot[0][1] = true
        document.getElementById("lukitse1").innerText = "lukittu"
    }
    
}

function lukitus2(){
    if(voitto == 0 && kuviot[1][2] == false){
        kuviot[1][1] = true
        document.getElementById("lukitse2").innerText = "lukittu"
    }
}

function lukitus3(){
    if(voitto == 0 && kuviot[2][2] == false){
        kuviot[2][1] = true
        document.getElementById("lukitse3").innerText = "lukittu"
    }
}

function lukitus4(){
    if(voitto == 0 && kuviot[3][2] == false){
        kuviot[3][1] = true
        document.getElementById("lukitse4").innerText = "lukittu"
    }
}

function kuvatPaikalleen(){
    let tulokset = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
    voitto = 0
    for (let i = 0; i < kuviot.length; i++){        
        document.getElementById(i).src = kuvat[kuviot[i][0]]
        tulokset[kuviot[i][0]][1] = tulokset[kuviot[i][0]][1] + 1
    }
    if(tulokset[0][1] == 4){
        voitto = panos * 3
    }else if(tulokset[1][1] == 4){
        voitto = panos * 4
    }else if(tulokset[2][1] == 4){
        voitto = panos * 5
    }else if(tulokset[3][1] == 4){
        voitto = panos * 6
    }else if(tulokset[4][1] == 3){
        voitto = panos * 5
    }else if(tulokset[4][1] == 4){
        voitto = panos * 10
    }
    saldo = saldo + voitto
    document.getElementById("saldo").innerText = "Saldo: "+ saldo +" e"
    document.getElementById("ilmoitus").innerText = "voitto: " + voitto + " e"
}