function solution(n, lost, reserve) {
    // 도난당한 동시에 여벌 갖고 있는 학생 처리
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            i--;
        }
    }
        
    // 현재 수업을 들을 수 있는 학생 수
    let answer = n - lost.length;
    
    lost.sort();
    reserve.sort();

    for (let i = 0; i < reserve.length; i++) {
        // reserve[i] 의 ±1 의 값이 lost 에 존재한다면
        // -> answer += 1, lost 에서 해당 값 제거, reserve 제거
        if (lost.includes(reserve[i] - 1)) {
            answer += 1;
            lost.splice(lost.indexOf(reserve[i] - 1), 1);
        } else if (lost.includes(reserve[i] + 1)) {
            answer += 1;
            lost.splice(lost.indexOf(reserve[i] + 1), 1);
        }
    }

    return answer;
}
