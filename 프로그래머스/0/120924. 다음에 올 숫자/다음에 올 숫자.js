function solution(common) {
    let answer = 0;
    // 등차수열 확인
    let isArth = (common[1] - common[0] === common[2] - common[1])
    let diff = isArth ? common[2] - common[1] : common[2]/common[1];
    
    // 등차수열
    if(isArth)
        answer = common[common.length -1]+diff;
    // 등비수열
    else
        answer = common[common.length -1]*diff;
    
    return answer;
}