function soma(n1, n2) {
    return n1 + n2
}

function subtracao(n1, n2) {
    return n1 - n2
}

function multiplicacao(n1, n2) {
    return n1 * n2
}

function divisao(n1, n2) {
    return n1 / n2
}


function mostrarnome(nome = prompt("Qual o seu nome?")) {
    alert("olá, " + nome)
}

function arearetangulo(base, altura) {
    return base * altura
}

function areacirculo(raio) {
    return 3.1 * (raio * raio)  //pi x raio^2
}

function calccir(raio = prompt("qual o raio do circulo")) {
    return 3.1 * (raio * raio)  //pi x raio^2
}

function hipotrian(cat1 = prompt("qual o valor do cateto 1?"), cat2 = prompt("qual o valor do cateto 2?")) {
    return Math.sqrt((cat1 * cat1) + (cat2 * cat2))
}
function readoll(reais = prompt("quantos reais quer converter?"), doll = 4.93) {
    return reais * doll
}