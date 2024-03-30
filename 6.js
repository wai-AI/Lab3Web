function sumOfSeries(n) {
    let sum = 0;
    let term = 1;

    for (let i = 0; i < n; i++) {
        sum += term;
        term = term * 10 + 1;
    }

    return sum;
}


let n = prompt("Введіть кількість доданків: ", 0);
const result = sumOfSeries(n);

// Выводим результат
console.log("Сума ряду з", n, "доданків", result);