function solution(n) {
    let inputDigit = convertDigitOneLen(n);
    
    let i = n + 1;
    while(true){
        let targetDigit = convertDigitOneLen(i);
        if(targetDigit === inputDigit){
            return i;
        }
        i++        
    }
}

function convertDigitOneLen(n) {
    let q = n, arr = [];
    while(q > 0){
        let r = q % 2;
        arr.push(r);
        q = parseInt(q/2)
    }    
    return arr.filter((ele) => ele === 1).length;
}