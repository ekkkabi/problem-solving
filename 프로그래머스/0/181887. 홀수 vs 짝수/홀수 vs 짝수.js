function solution(num_list) {
    let oddSum = num_list.reduce((acc, ele, idx) => {
        return idx % 2 !== 0 ? acc + ele : acc;
    }, 0);
    
    let evenSum = num_list.reduce((acc, ele, idx) => {
        return idx % 2 === 0 ? acc + ele : acc;
    }, 0);
    
    return Math.max(oddSum, evenSum);
}