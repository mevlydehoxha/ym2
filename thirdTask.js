const readline = require('readline');
function harshad(number) {
    const sumOfDigits = Array.from(String(number), Number).reduce((acc, digit) => acc + digit, 0);
    return number % sumOfDigits === 0;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an integer: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
        console.log("Invalid input.");
    } else {
        if (harshad(number)) {
            console.log(`${number} is a Harshad number.`);
        } else {
            console.log(`${number} is not a Harshad number.`);
        }
    }
    
    rl.close();
});
