const vibor = ["7", "vishnya", "vishnya", "vinograd", "vinograd", "vinograd",
             "slivi", "slivi", "slivi", "slivi", "yabloko", "yabloko", "yabloko",
             "yabloko", "yabloko"]
const COEF = { "7": 100, "vishnya": 10, "vinograd": 5, "slivi": 3, "yabloko": 2 }
let v = []
let balance = 500
let stavka = 0
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const button = document.getElementById('myButton');
button.onclick = function() {
    stavka = +prompt('сделайте вашу ставку')
    
    if(Number.isNaN(stavka) || stavka <= 0) return alert('вы ввели не число') 
    
    if (stavka > balance) return alert('у вас столько нету')
    
    balance -=  stavka
    

    for (let i = 0; i < 3; i++){
        const random = getRandomInt(0, vibor.length - 1)
        v.push(vibor[random])
    }

    console.log(v)

    let para = (v[0] == v[1]) + (v[1] == v[2]) + (v[0] == v[2]) == 1
    console.log(para)
    if (para && getRandomInt(0,1) == 0) {
        const z = v[0] === v[1] || v[0] === v[2] ? v[0] : v[1];
        v.length = 0
        v.push(z, z, z);
        console.log(z)
    }
    
    console.log(v)

    if (v[0] == v[1] && v[1] == v[2]){
        const win = stavka * COEF[v[0]]
        console.log('вы победили, ваш выйгрыш - ', win )
        balance += win
    }
    else{
        console.log('вы проиграли,')
    }
    console.log(balance)

    v.length = 0

};
