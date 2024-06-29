function solution(todo_list, finished) {
    let answer = []
    let todo = {};
    for(let i = 0; i<todo_list.length; i++){
        todo[todo_list[i]] = finished[i]
    }
    for(let ele in todo){
        if(todo[ele] === false)
            answer.push(ele)
    }
    return answer;
}