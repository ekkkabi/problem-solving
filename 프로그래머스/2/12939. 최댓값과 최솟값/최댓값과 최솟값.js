function solution(s) {
    let arr = (s.split(' ')).map(Number);
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return `${min} ${max}`;
}