import sys
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    m = int(input())
    dic = {}
    for _ in range(m):
        item, cate = input().strip().split(' ')
        if cate not in dic:
            dic[cate] = []
        dic[cate].append(item)

    sums = 1
    for cate in dic:
        sums *= (len(dic[cate]) + 1)
    sums -= 1
    print(sums)
