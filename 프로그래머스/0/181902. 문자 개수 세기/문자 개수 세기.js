function solution(my_string) {    
    // A ~ z 까지 객체 : value 0 으로 초기화
    let charMap = {};
    for (let i = 'A'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    let char = String.fromCharCode(i);
    if (('A'.charCodeAt(0) <= i && i <= 'Z'.charCodeAt(0)) 
        || ('a'.charCodeAt(0) <= i && i <= 'z'.charCodeAt(0))) {
        charMap[char] = 0;
        }
    }
    for (let j = 0; j<my_string.length; j++){
        charMap[my_string[j]] += 1;
    }
    
    return Object.values(charMap);
}