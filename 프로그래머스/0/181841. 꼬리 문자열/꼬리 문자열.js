function solution(str_list, ex) {
    let answer = '';
    for(let val of str_list){
        if(!val.includes(ex))
            answer += val;
    }
    return answer;
}