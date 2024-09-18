const fibonnacci = (a) => {
    if(a == 0 || a == 1){
        return a;
    }

    num = fibonnacci(a-1) + fibonnacci(a-2);

    return num;
}


const printFibonacci = (limit) => {
    let n = 0;
    let fibNum;
    
    while (true) {
        fibNum = fibonnacci(n);
        if (fibNum > limit) {
            break;
        }
        console.log(fibNum);
        n++; 
    }
};

printFibonacci(5000);

//0 1 1 2 3 5 8 13