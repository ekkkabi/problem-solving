function solution(my_string, is_suffix) {
    if(is_suffix.length > my_string.length)
        return 0;
    return my_string.endsWith(is_suffix) ? 1 : 0;
}