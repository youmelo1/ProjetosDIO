let nome = 'Youmelo1'
let nivel = 0

function rank(nivel){
    if (nivel<1000) {
        return "Ferro"
    }
    if (nivel >= 1001 && nivel <= 2000){
        return "Bronze"
    }
    if (nivel >= 2001 && nivel <= 5000){
        return "Prata"
    }
    if (nivel >= 5001 && nivel <= 7000){
        return "Ouro"
    }
    if (nivel >= 7001 && nivel <= 8000){
        return "Platina"
    }
    if (nivel >= 8001 && nivel <= 9000){
        return "Ascendente"
    }
    if (nivel >= 9001 && nivel <= 10000){
        return "Imortal"
    }
    if (nivel >= 10001){
        return "Radiante"
    }
}


for (let i = 0; i<8; i++){
    if (i == 3 || i == 4){
        nivel += 2200
    }else{
        nivel+=999
    }
    console.log(`O Herói de nome **{${nome}}** está no nível de **{${rank(nivel)}}**`)
    
}