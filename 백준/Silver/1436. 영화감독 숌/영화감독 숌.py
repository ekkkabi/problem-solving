import sys
input = sys.stdin.readline

n = int(input())

target = '666'
cnt = 0
start = 666
answer = 0

while (cnt < n):
    if (target in str(start)):
        cnt += 1
        answer = start
    if (cnt == n):
        break
    start += 1
print(answer)
