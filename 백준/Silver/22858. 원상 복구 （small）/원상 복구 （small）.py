n, k = map(int, input().strip().split())
Si = list(map(int, input().strip().split()))
Di = list(map(int, input().strip().split()))


def restore(S, D):
    arr = [0] * (n)
    for i in range(n):
        arr[D[i] - 1] = S[i]
    return arr


for _ in range(k):
    Si = restore(Si, Di)

print(' '.join(map(str, Si)))
