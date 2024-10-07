function solution(start_num, end_num) {
    let answer = [...Array(end_num-start_num+1)].map((_, ele)=> ele + start_num);
    return answer;
}