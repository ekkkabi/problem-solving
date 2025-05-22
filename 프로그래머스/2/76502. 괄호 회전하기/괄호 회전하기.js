function solution(s) {
    var answer = 0;
    let patern = s.split('')
    
    let sets = {
        '[' : ']',
        '(' : ')',
        '{' : '}',
    }
    
    for (let i = 0; i<s.length; i++){
        let arr = patern.slice(i).concat(patern.slice(0, i));

        let stack = []
        
        // 처음이 닫는 괄호일 경우 패스
        if(arr[0] == ')' || arr[0] == ']' || arr[0] == '}'){
            continue
        }
        
        // 처음이 여는 괄호일 경우
        for (let j = 0; j<arr.length; j++){  
            
            if(stack.length == 0){
                stack.push(arr[j])
            }
            else{
                // 바로 앞과 짝이 맞을 경우
                if(arr[j] == sets[stack[stack.length -1]]){
                      stack.pop()                
                }
                // 바로 앞과 짝이 아닐 경우
                else{
                    stack.push(arr[j])                
                }                 
            }
                                
        }
        
        if(stack.length == 0){
            answer += 1
        }   
    }
    return answer;
}

console.log(solution("[](){}"))