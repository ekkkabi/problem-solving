function solution(myString, pat) {
    let myString_upper = myString.toUpperCase();
    let pat_upper = pat.toUpperCase();
    return myString_upper.includes(pat_upper) ? 1 : 0;
}