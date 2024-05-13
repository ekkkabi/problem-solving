function solution(n)
{
    let answer = 0;
    let arr = String(n).split('');
    arr.map((idx)=> answer += Number(idx));
    return answer;
}