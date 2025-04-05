import sys
input = sys.stdin.readline


def make(n):
    total = sum(int(x) for x in str(n))
    return int(str(n)[-1] + str(total)[-1])


num = int(input())
cnt = 0
origin = num
while True:
    cnt += 1
    if (num < 10):
        num = '0' + str(num)
    num = make(num)
    if (num == origin):
        break
print(cnt)
