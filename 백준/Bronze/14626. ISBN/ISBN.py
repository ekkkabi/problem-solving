import sys
input = sys.stdin.readline

s = list(input().strip())
answer = 0

total = 0
idx = 0
for i in range(13):
    if (s[i] == '*'):
        if (i % 2 == 0):
            idx = 1
        else:
            idx = 3
        continue
    if (i % 2 == 0):
        total += 1 * int(s[i])
    else:
        total += 3 * int(s[i])

for j in range(10):
    if ((total + idx * j) % 10 == 0):
        answer = j
        break
print(answer)
