T = int(input())

for test_case in range(1, T+1):
    n = int(input())
    answer = ''
    for _ in range(n):
        alpha, num = input().strip().split(' ')
        answer += alpha * int(num)

    print(f'#{test_case}')
    for i in range(0, len(answer), 10):
        print(answer[i:i+10])
