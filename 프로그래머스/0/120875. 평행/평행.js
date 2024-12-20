function findSlope(arr1, arr2){
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

function solution(dots) {
    
    if(findSlope(dots[0], dots[1]) === findSlope(dots[2], dots[3])) return 1;
    if(findSlope(dots[0], dots[2]) === findSlope(dots[1], dots[3])) return 1;
    if(findSlope(dots[0], dots[3]) === findSlope(dots[1], dots[2])) return 1;
    
    return 0;  
    
}


