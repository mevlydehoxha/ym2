const readline = require('readline');

function getNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum < number) {
        return "deficient";
    } else if (sum === number) {
        return "perfect";
    } else {
        return "abundant";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (num) => {
    num = parseInt(num);
    if (isNaN(num)) {
        console.log("Invalid.");
    } else {
        const result = getNumber(num);
        console.log(`${num} is ${result}.`);
    }
    rl.close();
});
