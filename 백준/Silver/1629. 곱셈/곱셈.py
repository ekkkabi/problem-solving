a, b, c = map(int, input().split())


def func1(a, b, m):
    # Base condition
    # a 가 m 보다 클 수 있으므로 a % m
    if (b == 1):
        return a % m

    val = func1(a, b//2, m)
    val = (val * val) % m

    # 짝수
    if (b % 2 == 0):
        return val

    # 홀수
    return val * a % m


print(func1(a, b, c))
