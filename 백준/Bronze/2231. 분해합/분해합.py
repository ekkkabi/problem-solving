N = int(input())

def sol(N):
    for i in range(1, N+1):
        sums = i
        for num in str(i):
            sums += (int(num))

        if (sums == N):
            return i

    return 0


print(sol(N))
