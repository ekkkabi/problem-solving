function solution(my_string, alp) {
    return my_string.split('').map((ele) => 
        ele === alp ? ele.toUpperCase() : ele
    ).join('');
}