var idade = prompt("qual sua idade ?");
//var idade = 18;

if (idade > 18) {
    console.log("maior de idade");
}
else {
    console.log("menor de idade");
}



var count = 0;
while (count < 5) {
    console.log(count);
    count++;    
}



for (let i = 0; i <= 5; i++) {
    console.log(i);
}




var d = new Date();

console.log(d);

console.log(d.getDay());

console.log(d.getMonth()+1);

console.log(d.getMinutes());

console.log(d.getHours());