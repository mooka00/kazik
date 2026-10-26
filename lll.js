const vibor = ["7", "vishnya", "vishnya", "vinograd", "vinograd", "vinograd", "slivi", "slivi", "slivi", "slivi", "yabloko", "yabloko", "yabloko", "yabloko", "yabloko"]
let v = []
let balance = 500
let stavka = 0
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const button = document.getElementById('myButton');
button.onclick = function() {
    stavka = +prompt('сделайте вашу ставку')
    if(Number.isNaN(stavka)){
        alert('вы ввели не число')
        return
    }
    if (stavka > balance){
        alert('у вас столько нету')
        return
    }
    balance = balance - stavka
    for (let i = 0; i < 3; i++){
        const random = getRandomInt(0, vibor.length - 1)
        v.push(vibor[random])
    }
    
    console.log(v)
    if ((v[0] == v[1] || v[0] == v[2]) && !(v[0] == v[1] && v[1] == v[2])){
        const monet = getRandomInt(0, 1)
        if (monet == 0){
            v.pop();v.pop();
            v.push(v[0]);v.push(v[0]);
            console.log(monet)
        }
        else{
            console.log(monet)
        }
        console.log(v)
    }
    else if(v[1] == v[2]){
        const monet = getRandomInt(0, 1)
        if (monet == 0){
            v.pop();v.shift();
            v.push(v[0]);v.push(v[0]);
            console.log(monet)
        }
        else{
            console.log(monet)
        }
        console.log(v)
    }
    if (v[0] == v[1] && v[1] == v[2]){
        if (v[0] == "7"){
            stavka = stavka*100
            console.log('вы победили, ваш выйгрыш - ', stavka )
        }
        else if(v[0] == "vishnya"){
            stavka = stavka*10
            console.log('вы победили, ваш выйгрыш - ', stavka )
        }
        else if(v[0] == "vinograd"){
            stavka = stavka*5
            console.log('вы победили, ваш выйгрыш - ', stavka )
        }
        else if(v[0] == "slivi"){
            stavka = stavka*3
            console.log('вы победили, ваш выйгрыш - ', stavka )
        }
        else {
            stavka = stavka*2
            console.log('вы победили, ваш выйгрыш - ', stavka )
        }
        
    }
    else{
        stavka = 0
        console.log('вы проиграли,')
    }
    balance = balance + stavka
    console.log(balance)

    v.pop();v.pop();v.pop()

};
