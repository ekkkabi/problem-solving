function solution(numbers, direction) {
    let len = numbers.length;
    let answer = [];
    switch(direction){
        case 'right':
            answer = [numbers[len-1]].concat(numbers.slice(0, len-1));
            break;
        case 'left':
            answer = numbers.slice(1,len).concat([numbers[0]]);
            break;
    }
    return answer;
}