function solution(answers) {
    var answer = [];
    
    let p1 = Array(Math.ceil(answers.length / 5)).fill([1, 2, 3, 4, 5])
            .flat().slice(0, answers.length);
    let p2 = Array(Math.ceil(answers.length / 8)).fill([2, 1, 2, 3, 2, 4, 2, 5])
            .flat().slice(0, answers.length);
    let p3 = Array(Math.ceil(answers.length / 10)).fill([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
            .flat().slice(0, answers.length);
    
    let p1Cnt = 0
    let p2Cnt = 0
    let p3Cnt = 0
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === p1[i])
            p1Cnt ++
        if(answers[i] === p2[i])
            p2Cnt ++
        if(answers[i] === p3[i])
            p3Cnt ++    
    }
    
    let arr = [p1Cnt, p2Cnt, p3Cnt]
    let maxNum = Math.max(...arr)
    for (let j = 0; j<3; j++){
        if (arr[j] === maxNum)
            answer.push(j+1)
    }
    
    return answer;
}