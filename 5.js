let sum, dobutok;

sum = 0;
dobutok = 1;

for(var i=1; i<=10;i++){
    sum += i;
    dobutok *= i;
}
console.log("Сума: " + sum + "\n" + "Добуток: " + dobutok);