function solution(numlist, n) {
    var answer = [];
    let max = Math.max(...numlist);
    let min = Math.min(...numlist);
    let diff = Math.max(Math.abs(min-n), Math.abs(max-n));
    let numArr = numlist.slice().sort((a, b) => a - b).reverse();
    
    for(let i = 0; i<= diff; i++){
        let filterNum = numArr.filter((ele) => Math.abs(n-ele) === i);
        if(filterNum.length !== 0)
            answer.push(filterNum);       
    }    
    return answer.flat(Infinity);;
}