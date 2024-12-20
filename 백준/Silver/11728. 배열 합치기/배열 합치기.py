N, M = list(map(int, input().split()))
A = list(map(int, input().split()))
B = list(map(int, input().split()))

aIdx = 0
bIdx = 0
answer = []

for i in range(0, N+M):
    if (aIdx >= N):
        answer.append(B[bIdx])
        bIdx += 1
    elif (bIdx >= M):
        answer.append(A[aIdx])
        aIdx += 1
    elif (A[aIdx] < B[bIdx]):
        answer.append(A[aIdx])
        aIdx += 1
    else:
        answer.append(B[bIdx])
        bIdx += 1
        
print(' '.join(map(str, answer)))
