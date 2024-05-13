function solution(a, d, included) {
    let answer = included.reduce((arr, item, idx) => {
        if(item === true)
            arr.push(idx)
        return arr;
    }, [])
    let sum = 0;
    answer.map((idx) => {
        sum += ((a) + (idx)*d) 
    })
    return sum;
}