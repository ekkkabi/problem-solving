function solution(emergency) {
    let answer = [];
    let result = {}
    let maxArr = [...emergency].sort((a,b) => a-b).reverse();
    
    // 객체 키 값 초기화
    for (let ele of emergency) {
        result[ele] = 0;
    }
    
    // 객체 value 값 할당
    for(let i = 0; i< maxArr.length; i++){
        result[maxArr[i]] = i + 1;
    }
    
    // 순서 재정렬
    for(let val of emergency){
        answer.push(result[val])
    }
    
    return answer;
}