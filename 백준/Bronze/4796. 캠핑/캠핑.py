import sys
input = sys.stdin.readline

i = 1
while True:
    l, p, v = map(int, input().strip().split())
    if (l == 0 and p == 0 and v == 0):
        break
    a = (v // p) * l
    b = min((v % p), l)

    print(f'Case {i}: {a + b}')
    i += 1
