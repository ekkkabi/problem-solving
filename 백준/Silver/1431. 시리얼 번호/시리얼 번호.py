import sys
input = sys.stdin.readline

n = int(input())
lst = [(input().strip()) for _ in range(n)]


def doSum(e):
    sums = 0
    for s in e:
        if s.isdigit():
            sums += int(s)
    return sums


lst.sort(key=lambda x: (len(x), doSum(x), x))
print('\n'.join(lst))
