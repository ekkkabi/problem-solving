import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))

dic = {}
for num in range(m):
    id = input().strip()
    if id in dic:
        del dic[id]
    dic[id] = num


answer = sorted(dic.items(), key=lambda x: x[1])
if (n > len(answer)):
    n = len(answer)
for i in range(n):
    print(answer[i][0])
