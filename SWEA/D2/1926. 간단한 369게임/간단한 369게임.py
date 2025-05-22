n = int(input())
answer = []
samgukgu = ['3', '6', '9']

for num in range(1, n+1):
    cnt = 0

    strNum = list(str(num))
    for num in strNum:
        if (num in samgukgu):
            cnt += 1

    if (cnt == 0):
        answer.append(''.join(strNum))
    else:
        answer.append('-' * cnt)

print(' '.join(answer))
