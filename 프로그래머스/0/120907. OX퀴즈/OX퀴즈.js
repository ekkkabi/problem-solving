function solution(quiz) {
    var answer = [];
    for(let ele of quiz){
        let ex = ele.split(' ');
        let op1 = Number(ex[0]);
        let op2 = Number(ex[2]);
        let operator = ex[1];
        let result = Number(ex[4]);
        if(calculate(operator, op1, op2) === result)
            answer.push('O')
        else
            answer.push('X')
    }
    return answer;
}

function calculate(operator, op1, op2){
    let tmp;
    switch(operator){
        case '+':
            tmp = op1 + op2;
            break;
        case '-':
            tmp = op1 - op2;
            break;
    }
    return tmp;
}