function solution(s, skip, index) {
    var answer = '';
    let alpha = 'qwertyuiopasdfghjklzxcvbnm';
    let notSkip = ''
    for (let ch of alpha){
        if(!skip.includes(ch)){
            notSkip += ch
        }
    }
    notSkip = notSkip.split('').sort()
    
    for (let n = 0; n<s.length; n++){
        let idx = notSkip.indexOf(s[n]);
        let target = (idx+index) % notSkip.length;
        answer += notSkip[target]        
    }
    
    return answer;
}