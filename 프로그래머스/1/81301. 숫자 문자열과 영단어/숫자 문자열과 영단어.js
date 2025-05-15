function solution(s) {
    let answer = '';
    let nums = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };
    let alpha = 'qwertyuioplkjhgfdsazxcvbnm'
    let key = ''
    
    for (let i = 0; i<s.length; i++){
        let curr = s[i]
        let next = s[i+1]
        
        if (alpha.includes(curr)){
            key += curr
            if(key in nums){
                answer += nums[key]
                key = ''
                continue
            }
            if(alpha.includes(next)){
                continue                
            }
            else{
                answer += nums[key]
                key = ''
                continue
            }
        }
        else{
            answer += curr
        }
    }
    return parseInt(answer)
}
