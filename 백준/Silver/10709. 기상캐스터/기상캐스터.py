import sys
input = sys.stdin.readline

h, w = map(int, input().strip().split())
for _ in range(h):
    arr = list(input().strip())
    answer = []

    # 구름이 있는 자리의 인덱스 번호들
    idxs = [j for j in range(len(arr)) if (arr[j] == 'c')]

    for i in range(w):
        cnt = float('inf')
        for p in idxs:
            if p <= i:
                cnt = min(cnt, i-p)

        if cnt == float('inf'):
            answer.append(-1)
        else:
            answer.append(cnt)

    print(' '.join(map(str, answer)))
