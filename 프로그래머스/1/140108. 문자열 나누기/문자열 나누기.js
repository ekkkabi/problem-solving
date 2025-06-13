function solution(s) {
    var answer = 0;
    
    let target = s.split('');
    while(target.length > 0){
        let x = 0;
        let not_x = 0;
        let i = 0;
        
        for(i = 0; i<target.length; i++){
            // 첫글자와 같은 경우
            if(target[i] === target[0]){
                x ++;
            }
            // 첫글자와 다른 경우 
            else{
                not_x ++;
            }
            
            // x 와 not_x 가 같아지는 순간
            if(x === not_x){
                target = target.slice(i+1);
                answer ++;
                break;
            }
        }
        
        if(i === target.length && x !== not_x){
            answer ++;
            break;
        }
    }
    
    return answer;
}