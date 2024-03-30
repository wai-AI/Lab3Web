function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let year = prompt("Введіть рік: ", 0);
console.log(year + ":", isLeap(year));