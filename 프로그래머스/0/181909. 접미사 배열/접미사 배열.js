function solution(my_string) {
    let answer = [];
    let lst_length = my_string.length;
    for(let i = 0; i<lst_length; i++){
        answer.push(my_string.slice(i, lst_length + i));
    }
    return answer.sort();
}