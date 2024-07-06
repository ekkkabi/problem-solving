function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i<arr1.length; i++){
        let tmp = [];
        for(let j = 0; j<arr1[i].length; j++){
            let sum = arr1[i][j] + arr2[i][j];
            tmp.push(sum);
        }
        answer.push(tmp);
    }
    return answer;
}