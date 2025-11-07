T = int(input())

for test_case in range(1, T+1):
    n = int(input())
    answer = 0
    speed = 0
    for _ in range(n):
        command = list(map(int, input().strip().split()))
        if (command[0] == 1):
            speed += command[1]
        elif (command[0] == 2):
            speed -= command[1]
        if (speed < 0):
            speed = 0
        answer += speed

    print(f'#{test_case} {answer}')
