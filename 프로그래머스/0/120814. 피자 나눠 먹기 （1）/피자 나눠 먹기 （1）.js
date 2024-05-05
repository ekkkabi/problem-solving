function solution(n) {
    if(( n % 7 < 7) && (n % 7 > 0))
        return Math.floor(n / 7) + 1;
    return Math.floor(n / 7);
}