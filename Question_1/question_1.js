const calculateFactorial = (number) => {
    if (number === 0 || number === 1) {
        return 1;
    }

    const result = number * calculateFactorial(number - 1);
    return result;
}

console.log(calculateFactorial(5));