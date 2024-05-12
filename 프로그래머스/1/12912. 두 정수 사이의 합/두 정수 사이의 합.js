function solution(a, b) {
    let sum = 0;
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    if (a == b)
        return a
    else
        for(let i = min+1; i<max; i++){
            sum += i;
        }
    return sum + a + b
        
}