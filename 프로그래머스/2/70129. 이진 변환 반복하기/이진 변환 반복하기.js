function solution(s) {
    let arr = s
    let count = 0, zero = 0;
    while(arr !== '1'){
        zero += arr.split('').filter((ele) => ele === '0').length;
        arr = arr.split('').filter((ele) => ele === '1').join('');
        arr = convertDigitOneLen(arr.length);
        count += 1;
    }
    return [count, zero];
}

function convertDigitOneLen(n) {
    let q = n, arr = [];
    while(q > 0){
        let r = q % 2;
        arr.push(r);
        q = parseInt(q/2)
    }
    return arr.reverse().join('')
}