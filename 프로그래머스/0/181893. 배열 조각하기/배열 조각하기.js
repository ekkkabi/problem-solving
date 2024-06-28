function solution(arr, query) {
    let answer = arr;
    let slices;
    for(let i = 0; i<query.length; i++){
        let isEven = i % 2;
        switch(isEven){
            // 짝수일경우
            case 0:
                slices = answer.slice(0, query[i] + 1);
                answer = slices;
                break;
            // 홀수일경우
            case 1:
                slices = answer.slice(query[i]); 
                answer = slices;
                break;
        }
    }
    return answer;
}