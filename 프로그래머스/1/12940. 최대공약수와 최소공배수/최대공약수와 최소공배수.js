function solution(n, m) {
    return [gcd(n, m), (n*m)/gcd(n, m)];
}

function gcd(n, m){
    let r = 0;
    while(m!==0){
        r = n % m;
        n = m;
        m = r;
    }
    return n;
}