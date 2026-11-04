const vibor = ["7", "1", "1", "2", "2", "2",
    "3", "3", "3", "3", "4", "4", "4",
    "4", "4"]
const COEF = { "7": 50, "1": 10, "2": 5, "3": 3, "4": 2 }
let v = ["0", "0", "0"]
let balance = 500
let c = 3

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const button = document.getElementById('myButton');
button.onclick = function () {
    const stavka = +document.getElementById('stavka').value
    if (Number.isNaN(stavka) || stavka <= 0) return alert('вы ввели не число')
    if (stavka > balance) return alert('у вас столько нету')

    balance -= stavka

    v.length = 0

    for (let i = 0; i < c; i++) {
        const random = getRandomInt(0, vibor.length - 1)
        v.push(vibor[random])
    }

    console.log(v)
    if (v.length == 3) {
        let para = (v[0] == v[1]) + (v[1] == v[2]) + (v[0] == v[2]) == 1
        console.log(para)
        if (para && getRandomInt(0, 1) == 0) {
            const z = v[0] === v[1] || v[0] === v[2] ? v[0] : v[1];
            v.length = 0
            v.push(z, z, z);
            console.log(z)
        }
    }
    console.log(v)

    if (v[0] == v[1] && v[1] == v[2]) {
        const win = stavka * COEF[v[0]]
        console.log('вы победили, ваш выйгрыш - ', win)
        balance += win
    }
    else {
        console.log('вы проиграли,')
    }
    render();
    
}

const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');



btn.onclick = () => {
    menu.classList.toggle('hidden');
}

const text = document.getElementById('balance');
text.textContent = balance

const grid = document.getElementById('grid');
function render() {
    grid.innerHTML = '';
    v.forEach(el => {
        const sq = document.createElement('div');
        sq.className = 'square';
        sq.textContent = el;
        grid.appendChild(sq);
    })
    document.getElementById('balance').textContent = balance
}
render();
