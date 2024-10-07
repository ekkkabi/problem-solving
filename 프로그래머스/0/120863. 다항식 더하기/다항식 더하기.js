function solution(polynomial) {
    let xS = polynomial.split(' ').filter((ele) => ele.includes('x'));
    let xR = xS.map((item) => {
        let part = item.replace('x', '');
        return part === '' ? 1 : Number(part)
    }).reduce((acc, curr) => acc + curr, 0);

    let nums = polynomial.split(' ').filter((ele) => !ele.includes('x') && !ele.includes('+')).map(Number);    
    let numR = nums.reduce((acc, curr) => acc + curr, 0);
    
    let result = '';
    if (xR === 0 && numR === 0) {
        result = '0';
    } else {
        if (xR !== 0) {
            result += (xR === 1 ? 'x' : `${xR}x`);
        }
        if (numR !== 0) {
            if (xR !== 0) {
                result += ` + ${numR}`;
            } else {
                result += `${numR}`;
            }
        }
    }
    return result;
}