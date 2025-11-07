T = int(input())

for test_case in range(1, T+1):
    n = int(input())
    nums = [2, 3, 5, 7, 11]
    answer = []

    for num in nums:
        cnt = 0
        while (n % num == 0):
            n = n/num
            cnt += 1
        answer.append(cnt)

    print(f'#{test_case}', *answer)
