function solution(s) {
    let answer = '';
    let s_length = s.length;
    let mid = Math.floor(s_length / 2);
    if(s_length % 2 != 0)
        answer += s[mid];
    else
        answer += s.slice(mid-1, mid+1); 
    console.log(s_length, mid, answer);

    return answer;
}