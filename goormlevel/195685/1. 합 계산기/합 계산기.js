const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
	if (input.length > Number(input[0])) {
		rl.close();
	}
});

rl.on('close', () => {
	const num = Number(input[0]);
	let answer = 0;
	for(let i = 1; i<=num; ++i){
		let tmp = input[i].split(' ');
		let first = Number(tmp[0]);
		let op = tmp[1];
		let second = Number(tmp[2]);
		switch(op){
			case '+':
				rst = Number(first) + Number(second);
				break;
			case '-':
				rst = Number(first) - Number(second);
				break;
			case '/':
				rst = Math.floor(Number(first) / Number(second));
				break;
			case '*':
				rst = Number(first) * Number(second);
				break;
			default:
				console.log('wrong');
				break;
		}
		answer += rst;
	}
	console.log(answer);
})
