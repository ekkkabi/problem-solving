/**
 * < 문제 >
 * 행복 왕국의 왕실 정원은 체스판과 같은 8*8 좌표 평면이다.
 * 왕실 정원의 특정한 한 칸에 나이트가 서있다.
 * 나이트는 말을 타고 있어 이동시 L 자 형태로만 이동할 수 있으며, 정원 밖을 나갈 수 없다.
 *
 * 나이트는 특정 위치에서 다음과 같은 2가지 경우로 이동할 수 있다.
 * 1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
 * 2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
 *
 * < 입력조건 >
 * 첫째 줄에 8*8 좌표 평면상에서
 * 현재 나이트가 위치한 곳의 좌표를 나타내는 두 문자로 구성된 문자열이 입력
 * ex. a1
 *
 * < 출력 조건 >
 * 첫째 줄에 나이트가 이동할 수 있는 경우의 수를 출력
 *  */

const current = 'c2';

const column = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
};

const x = column[current[0]];
const y = Number(current[1]);

let count = 0;

const dierection = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
];

for (let i = 0; i < dierection.length; i++) {
    const nx = x + dierection[i][0];
    const ny = y + dierection[i][1];

    if (nx > 0 && nx < 9 && ny > 0 && ny < 9) count++;
}

console.log(count);
