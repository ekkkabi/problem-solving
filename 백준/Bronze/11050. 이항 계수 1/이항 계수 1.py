import sys

n, k = map(int, sys.stdin.readline().split(' '))

def factorial(num):
    if num == 0:
        return 1
    return num * factorial(num-1)

print((factorial(n) // (factorial(k) * factorial(n-k))))
