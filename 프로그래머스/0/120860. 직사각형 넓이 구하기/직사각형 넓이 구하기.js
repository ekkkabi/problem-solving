function solution(dots) {
    let target = dots[0];
    let same_x = dots.filter((ele) => ele[0] === target[0] && ele !== target)[0];
    let same_y = dots.filter((ele) => ele[1] === target[1] && ele !== target)[0];
    
    let width = Math.abs(target[0] - same_y[0]);
    let height = Math.abs(target[1] - same_x[1]);

    
    return width * height;
}