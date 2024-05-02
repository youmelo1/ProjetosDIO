function calcRank(quantVitoria, quantDerrota){
    let saldoVitorias = quantVitoria - quantDerrota
    let nivel

    if(saldoVitorias<=10){
        nivel = "Ferro"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }


    if(saldoVitorias>=11 && saldoVitorias<=20){
        nivel = "Bronze"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }


    if(saldoVitorias>=21 && saldoVitorias<=50){
        nivel = "Prata"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }


    if(saldoVitorias>=51 && saldoVitorias<=80){
        nivel = "Ouro"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }


    if(saldoVitorias>=81 && saldoVitorias<=90){
        nivel = "Diamante"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }


    if(saldoVitorias>=91 && saldoVitorias<=100){
        nivel = "Lendário"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }


    if(saldoVitorias>=101){
        nivel = "Imortal"
        console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`)
    }

}

let vitorias = 11
let derrotas = 10

for (let i = 0; i<7; i++){

    if(i == 3){
        vitorias += 49
    }

    calcRank(vitorias, derrotas)

    vitorias += 10
}