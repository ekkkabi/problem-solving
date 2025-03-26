import sys
input = sys.stdin.readline

dic = dict()
n = int(input())
for _ in range(n):
    title = input().strip()
    if (title in dic):
        dic[title] += 1
    else:
        dic[title] = 1
sortD = dict(sorted(dic.items(), key=lambda x: (-x[1], x[0])))
v = list(sortD.items())[0][1]
answer = [i for i, j in sortD.items() if v == j]
print(answer[0])
