import math
import sys
input = sys.stdin.readline

m, n = map(int, input().split(' '))
primes = [True] * (n+1)
primes[0], primes[1] = False, False

for i in range(2, int(math.sqrt(n))+1):
    if (primes[i]):
        # 배수 지우기
        for j in range(i*i, n+1, i):
            primes[j] = False

for j in range(m, n+1):
    if (primes[j]):
        print(j)
