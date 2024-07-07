function solution(num, k) {
    let arr = num.toString().split('').indexOf(String(k))
    return arr !== -1 ? arr+1 : -1;
}