import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))

dic = {}
re_dic = {}
for order in range(1, n+1):
    poketmon = input().strip()
    dic[order] = poketmon
    re_dic[poketmon] = order

for _ in range(m):
    question = input().strip()
    if question.isdigit():
        print(dic[int(question)])
    else:
        print(re_dic[question])
