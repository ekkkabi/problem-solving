T = int(input())

for test_case in range(1, T + 1):

    callendar = {
        1: 31, 2: 28, 3: 31,
        4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30,
        10: 31, 11: 30, 12: 31
    }

    fm, fd, lm, ld = map(int, input().strip().split(' '))

    if (fm == lm):
        answer = ld-fd+1
    else:
        answer = (callendar[fm] - fd + 1) + (ld)
    for m in range(fm+1, lm):
        answer += callendar[m]

    print(f'#{test_case} {answer}')
