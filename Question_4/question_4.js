const evenOddZero = (a) => {
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;
    for(let i=0; i<a.length; i++){
        if(typeof a[i] == 'number'){
            if(a[i] === 0){
                zeroCount++;
            }else if(a[i]%2 === 0){
                evenCount++;
            }else{
                oddCount++;
            }
        }
    }

    return {"zeroCount " : zeroCount,
            "evenCount " : evenCount ,
            "oddCount " : oddCount};
}

let a = [0 , 1 , 3 , 5 , 7 , "run"];

console.log(evenOddZero(a));

