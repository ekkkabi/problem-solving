t = int(input())

for _ in range(t):
    num = int(input())
    d0 = [0] * (num + 1)
    d1 = [0] * (num + 1)

    d0[0] = 1
    if num > 0:
        d0[1] = 0
        d1[1] = 1

    for k in range(2, num+1):
        d0[k] = d0[k-1] + d0[k-2]
        d1[k] = d1[k-1] + d1[k-2]

    print(d0[num], d1[num], sep=' ')
