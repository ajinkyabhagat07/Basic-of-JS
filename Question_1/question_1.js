const factorial = (a) => {
    if(a == 0 || a == 1){
        return 1;
    }

    num = a * factorial(a-1);
    return num;
}


console.log(factorial(5));