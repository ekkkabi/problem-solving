function solution(x) {
    let sum = String(x).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0);  
    return (x % sum === 0) ? true : false;
}