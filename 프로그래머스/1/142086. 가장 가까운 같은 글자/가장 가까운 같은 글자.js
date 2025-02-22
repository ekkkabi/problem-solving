function solution(s) {
    var answer = [];
    let dic = {};
    s = s.split('')
    for (let [key, alpha] of s.entries()){
        if (!(alpha in dic))
            answer.push(-1)
        else
            answer.push(key - dic[alpha])
        dic[alpha] = key            
    }
    return answer;
}