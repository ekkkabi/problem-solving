function solution(score) { 
    let avgArr = score.map((item, idx) => ({ avg: (item[0] + item[1]) / 2, idx: idx }));
    avgArr.sort((a, b) => b.avg - a.avg);

    let answer = Array(score.length).fill(0);
    let rank = 1;
    let target = avgArr[0].avg;
    let count = 0;
    for (let i = 0; i < avgArr.length; i++) {
        let {avg, idx} = avgArr[i];
        if(avg === target)
            count++;
        else{
            rank += count;
            count = 1;
            target = avg;
        }
        answer[idx] = rank;
    }
    return answer;
}
