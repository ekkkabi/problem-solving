function solution(myStr) {
    let tmp = myStr.split(/[abc]/).filter(ele => ele !== '');
    return (tmp.length !== 0) ? tmp : ["EMPTY"];
}