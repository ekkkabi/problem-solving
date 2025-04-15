import sys
input = sys.stdin.readline

n = int(input())
dic = {}

for _ in range(n):
    num = int(input())
    if (num in dic):
        dic[num] += 1
    else:
        dic[num] = 1
sort_dic = sorted(dic.items(), key=lambda x: (-x[1], x[0]))
print(sort_dic[0][0])
