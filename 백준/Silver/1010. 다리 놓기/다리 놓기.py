t = int(input())

def factorial(num):
    if num == 0:
        return 1
    return num * factorial(num-1)


for _ in range(t):
    n, m = map(int, input().strip().split(' '))
    result = factorial(m) // (factorial(n) * factorial(m-n))
    print(result)
