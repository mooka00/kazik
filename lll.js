const vibor = ["7", "vishnya", "vishnya", "vinograd", "vinograd", "vinograd", "slivi", "slivi", "slivi", "slivi", "yabloko", "yabloko", "yabloko", "yabloko", "yabloko"]
let v = []
let balance = 500
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const button = document.getElementById('myButton');
button.onclick = function() {
    for (let i = 0; i < 3; i++){
        const random = getRandomInt(0, vibor.length - 1)
        v.push(vibor[random])
    }
    
    console.log(v)
    if (v[0] == v[1] || v[0] == v[2]){
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
            v.pop();v.reduce();
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
            balance = balance*100
            console.log('вы победили, ваш баланс увеличен в 100')
        }
        else if(v[0] == "vishnya"){
            balance = balance*10
            console.log('вы победили, ваш баланс увеличен в 10')
        }
        else if(v[0] == "vinograd"){
            balance = balance*5
            console.log('вы победили, ваш баланс увеличен в 5')
        }
        else if(v[0] == "slivi"){
            balance = balance*3
            console.log('вы победили, ваш баланс увеличен в 3')
        }
        else {
            balance = balance*2
            console.log('вы победили, ваш баланс увеличен в 2')
        }
        
    }
    else{
        balance = balance/2
        console.log('вы проиграли, ваш баланс уменьшился в 2')
    }
    console.log(balance)

    v.pop();v.pop();v.pop()

};
