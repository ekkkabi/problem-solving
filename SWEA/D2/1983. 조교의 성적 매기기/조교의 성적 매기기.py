t = int(input())
grade = ['A+', 'A0', 'A-',
         'B+', 'B0', 'B-',
         'C+', 'C0', 'C-', 'D0']


for _ in range(t):
    n, k = map(int, input().strip().split())
    scores = []
    for i in range(n):
        first, second, hw = map(int, input().strip().split())
        total = first * 0.35 + second * 0.45 + hw * 0.2
        scores.append([i+1, total])

    scores.sort(key=lambda x: x[1], reverse=True)
    for rank, (idx, total) in enumerate(scores):
        if idx == k:
            break

    per = n // 10
    gradeIdx = rank // per

    print(f'#{_+1} {grade[gradeIdx]}')
