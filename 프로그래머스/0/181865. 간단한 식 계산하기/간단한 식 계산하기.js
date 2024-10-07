function solution(binomial) {
    var answer = 0;
    let [x, operator, y] = binomial.split(' ');
    x = Number(x);
    y  = Number(y);
    switch(operator){
        case '+':
            answer = x + y;
            break;
        case '-':
            answer = x - y;
            break;
        case '*':
            answer = x * y;
            break;
        default:
            break;
    }
    return answer;
}