T = int(input())

for test_case in range(1, T+1):
    str1 = input().strip()
    str2 = input().strip()

    isIn = 1
    if (str1 not in str2):
        isIn = 0
    print(f'#{test_case} {isIn}')
