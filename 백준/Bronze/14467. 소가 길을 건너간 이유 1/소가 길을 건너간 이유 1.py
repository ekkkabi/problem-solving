n = int(input().strip())

count = {}
for i in range(n):
    num, dir = (map(int, input().strip().split()))
    if (num not in count):
        count[num] = [dir]
    else:
        count[num].append(dir)

answer = 0
for i in count:
    for j in range(len(count[i]) - 1):
        if count[i][j] != count[i][j+1]:
            answer += 1


print(answer)
