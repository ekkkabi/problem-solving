function solution(order) {
    let answer = 0;
    for(let val of order){
        if (val.includes('americano') || val === 'anything')
            answer += 4500;
        else if (val.includes('cafelatte'))
            answer += 5000;
    }
    return answer;
}