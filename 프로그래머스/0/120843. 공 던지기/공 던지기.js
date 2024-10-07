function solution(numbers, k) {
    let idx = 0;
    let i = 0;
    while(i<k-1){
        idx += 2;
        if(idx >= numbers.length){
            idx %= numbers.length;
        }
        i += 1;
    }
    return numbers[idx];
}