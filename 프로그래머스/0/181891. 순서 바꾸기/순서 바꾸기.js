function solution(num_list, n) {
    let first = num_list.slice(0, n);
    let final = num_list.slice(n);
    return [...final, ...first];
}