function solution(date1, date2) {
    let dateOne = new Date(date1[0], date1[1] - 1, date1[2]);
    let dateTwo = new Date(date2[0], date2[1] - 1, date2[2]);
    return dateOne < dateTwo ? 1 : 0;
}