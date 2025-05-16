function isPrime(num){
    for (let i = 2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false
        }        
    }
    return true
}

function solution(nums) {
    let answer = 0
    nums = nums.sort((a,b) => a-b)
    
    for (let i = 0; i<nums.length-2; i++){
        for (let j = i+1; j<nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
                let total = nums[i] + nums[j] + nums[k]
                if(isPrime(total)){
                    answer += 1
                }
            }
        }
    }
    return answer;
}
