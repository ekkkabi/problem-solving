function solution(my_string, n) {
    let answer = '';
    for(let ele of my_string){
        answer += ele.repeat(n);
    }
    return answer;
}