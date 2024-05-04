function solution(my_string, overwrite_string, s) {
    const overwrite_length = overwrite_string.length;
    let answer = my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_length);
    return answer;
}
