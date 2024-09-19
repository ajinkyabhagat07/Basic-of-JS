


const isArmstrong = (n) => {
    let originalNum = n;
    let num = 0;
    const power = n.toString().length;

    while (n > 0) {
        let rem = n % 10;
        num += Math.pow(rem, power);
        n = Math.floor(n / 10); 
    }

    return originalNum === num; 
}

const armstrongNumbers = (limit) => {
 
    for (let i = 1; i <= limit; i++) {
        if (isArmstrong(i)) {
            console.log(i); 
        }
    }
}


armstrongNumbers(100000);