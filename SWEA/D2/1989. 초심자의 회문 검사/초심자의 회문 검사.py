T = int(input())

for test_case in range(1, T+1):
    n = list(input().strip())

    left, right = 0, len(n) - 1
    isSame = 1

    while (left < right):
        if (n[left] == n[right]):
            left += 1
            right -= 1
        else:
            isSame = 0
            break

    print(f'#{test_case} {isSame}')
