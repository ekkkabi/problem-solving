function solution(num_list, n) {
    let answer = num_list.find((ele) => ele == n);
    return answer === n ? 1 : 0;
}