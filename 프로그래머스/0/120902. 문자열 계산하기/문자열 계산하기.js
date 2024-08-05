function solution(my_string) {    
    let ex = my_string.split(' ');
    let opStack = [], numStack = [];
    
    for(let i of ex){
        if(isNaN(Number(i)))
            opStack.push(i);
        else
            numStack.push(i);
    }
    numStack = numStack.map(Number);
    
    let answer = numStack[0];
    numStack.shift();
    for(let i = 0; i<opStack.length; i++){
        if(opStack[i] === '+')
            answer += numStack[i];
        else
            answer -= numStack[i];
    }
    return answer;    
}