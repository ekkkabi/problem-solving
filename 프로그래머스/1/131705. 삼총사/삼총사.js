function solution(number) {
    var answer = 0;
    let len = number.length
    for (let i = 0; i<len-1; i++){
        for (let j = i+1; j<len; j++){
            let sums = number[i] + number[j]
            let sepL = number.slice(j+1, len)
            for (let isIn of sepL){
                if(isIn + sums === 0){
                    answer += 1
                }
            }
        }
    }
    return answer;
}
console.log(solution([-2, 3, 0, 2, -5]))