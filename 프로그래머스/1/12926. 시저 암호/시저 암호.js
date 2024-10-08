function solution(s, n) {
    var answer = '';
    let str = s.split('');

    for(let val of str){
        if(val === ' ')
            answer += ' ';
        else{
            let charCode = val.charCodeAt(0);
            if (charCode >= 97 && charCode <= 122) {
                let newChar = String.fromCharCode((charCode - 97 + n) % 26 + 97);
                answer += newChar;
            }
            else if (charCode >= 65 && charCode <= 90) {
                let newChar = String.fromCharCode((charCode - 65 + n) % 26 + 65);
                answer += newChar;
            }
        }
    }
    return answer;
}