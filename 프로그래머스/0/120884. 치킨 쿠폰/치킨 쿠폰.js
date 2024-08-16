function solution(chicken) {
    let count = 0;
    let coupon = chicken;
    
    while(coupon >= 10){
        let service = parseInt(coupon / 10);
        count += service;
        coupon = service + (coupon%10);        
    }
    return count;
}