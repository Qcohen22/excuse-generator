let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
function football (arr){
    return Math.floor(Math.random()* arr.length)
}
let p = `${who[football(who)]} ${action[football(action)]} ${what[football(what)]} ${when[football(when)]}`

document.querySelector("#football").innerHTML = p