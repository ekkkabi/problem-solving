import sys
input = sys.stdin.readline

n, c = map(int, input().strip().split())
lst = list(map(int, input().strip().split()))

dic = {}
for e in lst:
    if (e in dic):
        dic[e] += 1
    else:
        dic[e] = 1

sorted_d = sorted(dic.items(), key=lambda x: -x[1])

answer = []
for i in range(len(sorted_d)):
    num, fre = sorted_d[i]
    answer.extend([num] * fre)

print(*answer)
