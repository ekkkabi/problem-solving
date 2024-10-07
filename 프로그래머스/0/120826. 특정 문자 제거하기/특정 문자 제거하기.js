function solution(my_string, letter) {
    return my_string.split('').filter((ele) => ele !== letter).join('');
}