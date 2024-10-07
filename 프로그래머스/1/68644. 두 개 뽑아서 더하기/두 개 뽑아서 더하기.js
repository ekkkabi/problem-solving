function solution(numbers) {
    let arr = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            arr.push(sum);
        }
    }
    let rst = Array.from(new Set(arr));
    let answer = rst.sort((a,b)=>a-b);
    return answer;
}