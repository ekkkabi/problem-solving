function solution(n, numlist) {
    let answer = numlist.filter((ele) => ele % n === 0);
    return answer;
}