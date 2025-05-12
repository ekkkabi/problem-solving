import sys
input = sys.stdin.readline

name = list(input().strip())
dic = dict()
for alpha in name:
    if (alpha in dic):
        dic[alpha] += 1
    else:
        dic[alpha] = 1

if ("M" in dic and "O" in dic
    and "B" in dic and "I" in dic
        and "S" in dic):
    print("YES")
else:
    print("NO")
