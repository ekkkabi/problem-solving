function solution(num_str) {
    let answer = 0;
    num_str.split('').map((ele) => answer += Number(ele));
    return answer;
}