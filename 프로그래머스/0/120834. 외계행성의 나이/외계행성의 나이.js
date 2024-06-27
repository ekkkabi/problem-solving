function solution(age) {
    let answer = '';
    let alpha = 'abcdefghij';
    
    let ageMap = {};
    for(let i = 0; i<alpha.length; i++){
        ageMap[i] = alpha[i];
    }
    
    for(let j = 0; j<String(age).length; j++){
        let digit = Number(String(age)[j]);
        answer += ageMap[digit];
    }
    return answer;
}