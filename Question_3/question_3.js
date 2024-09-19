const calculateFibonacci = (number) => {
    if (number === 0 || number === 1) {
        return number;
    }

    const result = calculateFibonacci(number - 1) + calculateFibonacci(number - 2);

    return result;
}


const printFibonacciSequence = (limit) => {
    let index = 0;
    let fibonacciNumber;
    
    while (true) {
        fibonacciNumber = calculateFibonacci(index);
        if (fibonacciNumber > limit) {
            break;
        }
        console.log(fibonacciNumber);
        index++; 
    }
};

printFibonacciSequence(5000);
//0 1 1 2 3 5 8 13