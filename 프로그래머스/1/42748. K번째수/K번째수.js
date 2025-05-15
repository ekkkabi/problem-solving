function solution(array, commands) {
    var answer = [];
    for (let arr of commands){
        let lst = array.slice(arr[0]-1, arr[1]).sort((a,b) => a-b)
        answer.push(lst[arr[2]-1])
    }
    return answer;
}