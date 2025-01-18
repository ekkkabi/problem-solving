import sys
input = sys.stdin.readline

n = int(input())

dic = {}
for _ in range(n):
    name, log = input().strip().split(' ')

    if log == "enter":
        dic[name] = True
    else:
        dic[name] = False

answer = []
for name, isEnter in dic.items():
    if isEnter == True:
        answer.append(name)
answer.sort(reverse=True)

print('\n'.join(answer))
