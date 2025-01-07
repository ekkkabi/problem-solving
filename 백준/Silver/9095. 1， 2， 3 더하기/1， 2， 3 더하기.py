T = int(input())


def sol(num):
    d = [0] * (max(4, num + 1))
    d[1] = 1
    d[2] = 2
    d[3] = 4

    for i in range(4, num+1):
        d[i] = d[i-1] + d[i-2] + d[i-3]

    return d[num]


for _ in range(T):
    inputs = int(input())
    print(sol(inputs))
