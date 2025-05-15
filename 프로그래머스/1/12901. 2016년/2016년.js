function solution(a, b) {
    let date = new Date(`2016-${a}-${b}`).toString();
    return date.slice(0,3).toUpperCase()
}

