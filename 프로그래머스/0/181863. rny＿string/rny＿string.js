function solution(rny_string) {
    if(!rny_string.includes('m'))
        return rny_string;
    let answer = rny_string.split('').map((ele) => ele === 'm' ? 'rn' : ele).join('');    
    return answer;
}