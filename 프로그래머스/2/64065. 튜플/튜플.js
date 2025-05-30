function solution(s) {
    var answer = [];
    let sen = s.replace(/{/gi, "[").replace(/}/gi, "]");
    let arr = JSON.parse(sen);
    arr.sort((a, b) => a.length - b.length);

    let sets = new Set();
    for (let row = 0; row < arr.length; row++) {
        for (let j = 0; j < arr[row].length; j++) {
            if (!sets.has(arr[row][j])) {
                sets.add(arr[row][j]);
                answer.push(arr[row][j]);
                break;
            }
        }
    }

    return answer;
}
