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

function tofahrenheit(celso = prompt("quantos graus celcius para converter em fahrenheit?")) {
    return (celso * 1.8) + 32     // (c x 1,8) +32
}

function mediaari(n1 = prompt("qual a primeira nota?"), n2 = prompt("qual a segunda nota?"), n3 = prompt("qual a tereceira nota?")) {
    return (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3
}

function raizes(a = prompt("'a'x² + bx + c"), b = prompt("ax² + 'b'x + c"), c = prompt("ax² + bx + 'c'")) {
    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)
    delta = (b * b) - 4 * a * c       // delta = b^2 - 4*a*c
    x1 = (-b + Math.sqrt(delta)) / 2 * a                  // x = (-b +- raiz delta) / 2a
    x2 = (-b - Math.sqrt(delta)) / 2 * a
    return [x1, x2]
}
