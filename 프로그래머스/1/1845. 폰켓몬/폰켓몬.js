function solution(nums) {
    const cate = new Set(nums);
    const maxPick = nums.length / 2;
    return Math.min(cate.size, maxPick);
}
