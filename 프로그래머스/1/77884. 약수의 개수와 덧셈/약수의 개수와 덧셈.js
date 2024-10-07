function solution(left, right) {
    var answer = [];
    let sets = new Set();
    for(let i = left; i<=right; i++){
        let tmp = [];
        for(let j = 1; j<=i; j++){
            if(i%j===0)
                tmp.push(j);
        }
        sets[i] = tmp.length;
        answer.push(tmp)
    }
    let evenKeysSum = Object.keys(sets).filter((key) => sets[key] % 2 === 0).map(Number).reduce((acc, curr) => acc + curr, 0);
    let oddKeysSum = Object.keys(sets).filter((key) => sets[key] % 2 !== 0).map(Number).reduce((acc, curr) => acc + curr, 0);
    
    return evenKeysSum-oddKeysSum;
}