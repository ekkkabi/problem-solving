import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    max = 0
    sums = 0
    lst = []

    for _ in range(n):
        v = int(input())
        sums += v
        lst.append(v)
        if (v > max):
            max = v

    arr = []
    for i in range(n):
        if (lst[i] == max):
            arr.append(i+1)

    if ((len(arr) == 1) and (max > ((sums / 2)))):
        print(f'majority winner {arr[0]}')
    elif (len(arr) == 1):
        print(f'minority winner {arr[0]}')
    else:
        print("no winner")
