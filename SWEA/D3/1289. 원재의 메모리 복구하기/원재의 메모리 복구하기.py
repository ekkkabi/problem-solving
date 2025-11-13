T = int(input())

for test_case in range(1, T+1):
    n = list(map(int, input().strip()))
    target = [0] * len(n)
    answer = 0

    for i in range(len(n)):
        if (target[i] != n[i]):
            # 반전 시키기
            for j in range(i, len(n)):
                if (target[j] == 1):
                    target[j] = 0
                else:
                    target[j] = 1
            answer += 1

    print(f'#{test_case}', answer)
