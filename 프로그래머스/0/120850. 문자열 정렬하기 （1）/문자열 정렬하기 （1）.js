function solution(my_string) {
    let answer = my_string.split('').filter((ele) => !isNaN(Number(ele))).map(Number).sort((a,b) => a-b);
    return answer;
}