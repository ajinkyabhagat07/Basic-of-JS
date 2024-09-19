const countEvenOddZero = (array) => {
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (array[i] === 0) {
                zeroCount++;
            } else if (array[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    return {
        zeroCount: zeroCount,
        evenCount: evenCount,
        oddCount: oddCount
    };
}

let inputArray = [0, 1, 3, 5, 7, "run"];

console.log(countEvenOddZero(inputArray));
