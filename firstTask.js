function factor(value) {
    const pairs = [];
    for (let i = 1; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            pairs.push([i, value / i]);
        }
    }
    return pairs.filter(pair => pair[0] < pair[1]); 
}

function format(pair) {
    return `${pair[0]} * ${pair[1]} = ${pair[0] * pair[1]}`;
}

function formatProducts(value) {
    const productsArray = factor(value);
    return productsArray.map(format); 
}

const value = 900900;
const formattedProducts = formatProducts(value);
console.log(formattedProducts.join('\n'));
