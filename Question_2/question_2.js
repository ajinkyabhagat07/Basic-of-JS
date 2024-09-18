const primeOrNot = (a) => {
    if(a < 2){
        return false;
    }

    for(let i = 2; i<a; i++){
        if(a%i == 0){
            return false;
        }
    }

    return true;
}

console.log(primeOrNot(9));