const vibor = ["7", "1", "1", "2", "2", "2",
    "3", "3", "3", "3", "4", "4", "4",
    "4", "4"]
const COEF = { "7": 50, "1": 10, "2": 5, "3": 3, "4": 2 }
let v = ["0", "0", "0"]
let balance = 500
let c = 3
let bonuss = 1
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

    if (v[0] == v[1] && v[1] == v[2]) {
        const win = stavka * COEF[v[0]]
        console.log('вы победили, ваш выйгрыш - ', win)
        win = bonuss * win
        balance += win
    }
    else {
        console.log('вы проиграли,')
    }
    render();

}

const shopbtn = document.getElementById('shopBtn');
const shop = document.getElementById('shop');
const structure = document.getElementById('structure')
const upgrade1 = document.getElementById('upgrade1')
const upgrade2 = document.getElementById('upgrade2')
const upgrade3 = document.getElementById('upgrade3')
const money1 = document.getElementById('money1')
const money2 = document.getElementById('money2')
const money3 = document.getElementById('money3')
const max1 = document.getElementById('max1')
const max2 = document.getElementById('max2')
const max3 = document.getElementById('max3')
const bonus = document.getElementById('bonus')

shopbtn.onclick = () => {
    shop.classList.toggle('hidden');
    const shopIsOpen = !shop.classList.contains('hidden');
    structure.classList.toggle('hidden', shopIsOpen);
}

upgrade1.onclick = () => {
    if (balance >= 1000){
        balance -= 1000
        bonuss = bonuss *1,5
    }
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
