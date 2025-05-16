import sys
input = sys.stdin.readline

a, p = map(int, input().strip().split())

lst = [a]
i = 0
while (True):
    numS = list(str(lst[i]))

    total = 0
    for n in numS:
        total += int(n) ** p

    if (total in lst):
        break

    lst.append(total)
    i += 1

print(lst.index(total))
