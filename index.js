// função para calcular o saldo de vitórias // 
function calcularSaldo(vitorias, derrotas){
        let saldoVitorias = vitorias - derrotas;
        return saldoVitorias;
}

// função para determinar o nível do herói com base no saldo de vitórias // 
function determinarNivel(saldoVitorias) {
        let nivel = " ";

        if(saldoVitorias <= 10){
                nivel = "Ferro";
        } else if(saldoVitorias > 10 && saldoVitorias <= 20){
                nivel = "Bronze";
        } else if (saldoVitorias > 20 && saldoVitorias <= 50){
                nivel = "Prata";
        } else if(saldoVitorias > 50 && saldoVitorias <= 80){
                nivel = "Ouro";
        } else if(saldoVitorias > 80 && saldoVitorias <= 90){
                nivel = "Diamante";
        } else if(saldoVitorias > 90 && saldoVitorias <= 100){
                nivel = "Lendário";
        } else {
                nivel = "Imortal"; 
        }

        return nivel;
}

// definindo o número de vitórias e derrotas //
let vitorias = 120;
let derrotas = 30;

// chamando as funções para calcular o saldo de vitórias e determinar o nível do herói //
let saldoVitorias = calcularSaldo(vitorias, derrotas);
let nivel = determinarNivel(saldoVitorias);

// exibindo a mensagem //
console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível " + nivel);



