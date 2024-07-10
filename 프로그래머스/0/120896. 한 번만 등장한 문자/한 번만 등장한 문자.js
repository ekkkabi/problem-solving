function solution(s) {
    var answer = []
    let alpha = new Map();
    for (let char of s) {
        if (alpha.has(char)) {
            alpha.set(char, alpha.get(char) + 1);
        } else {
            alpha.set(char, 1);
        }
    }
    
    for(let [key, value] of alpha){
        if(value === 1)
            answer.push(key)
    }

    return answer.sort().join('');
}