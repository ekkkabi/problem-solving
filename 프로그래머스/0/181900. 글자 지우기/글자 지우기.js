function solution(my_string, indices) {
    let answer = '';
    let sort_indices = indices.sort((a, b) => a - b);
    for(let i = 0; i<my_string.length; i++){
        if(!sort_indices.includes(i))
            answer += my_string[i];
    }
    return answer;
}