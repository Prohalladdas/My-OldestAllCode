let names="Naruto";
let name1="Madara";
let name2="Itachi";
let name3="Nagato";
let greetText=" good morning "

console.log(names);
// console.log(name1+" is a good boy");
// console.log(name2+" is a good boy");
// console.log(name3+" is a good boy");
function greet (name,greetText){
    console.log(name+" is a god")
    console.log(greetText+""+name)
}

greet(name1,greetText)
greet(name2,greetText)
greet(name3,greetText)

function sum(a,b,c){
    let d=a+b+c;
    return d;
}

let returnval=sum(1,2,3);
console.log(returnval)