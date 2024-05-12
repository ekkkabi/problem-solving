function solution(phone_number) {
    let len = phone_number.length;
    let last = phone_number.slice(len-4, len);
    let first = "*".repeat(len - 4);
    return first + last;
}