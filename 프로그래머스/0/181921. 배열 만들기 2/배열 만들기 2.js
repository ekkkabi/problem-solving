function solution(l, r) {
    let answer = [];
    for(let i = l; i<=r; i++){
        if(validator(i))
            answer.push(i);
    }
    return answer.length ? answer : [-1];
}

function validator(num){
    for(let ele of String(num)){
        if(ele !== '5' && ele !== '0')
            return false;
    }
    return true;
}