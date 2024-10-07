function solution(myString) {
    let answer = '';    
    for(let ele of myString){
        let myStringSort = ele.toLowerCase().charCodeAt();
        let pushStr = myStringSort < 'l'.charCodeAt() ? 'l' : ele;
        answer += pushStr;
    }
    return answer;
}