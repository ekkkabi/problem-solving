function solution(s){
    let stack = [];
    let input = s.split('')

    for(let i = 0; i<input.length; i++){
        if(input[i] === "("){
            stack.push("(")
        }
        else if(input[i] === ")"){
            if(stack.length === 0) return false;
            else if(stack[stack.length-1] !== "(") return false;
            else stack.pop()            
        }        
    }
    
    if(stack.length > 0) return false;
    else return true;
}