function solution(my_string, index_list) {
    let answer = '';
    for(ele of index_list){
        answer += my_string[ele];
    }
    return answer;
}