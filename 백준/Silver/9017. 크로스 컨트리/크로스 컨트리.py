import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    num = list(map(int, input().strip().split()))

   # 한 팀 6명 구성으로 된 팀 구하기
    teams = [0] * (max(num)+1)
    for team in num:
        teams[team] += 1
    removeTeam = set(n for n in range(1, len(teams)) if (teams[n] < 6))

    # 6명이 되지 않는 팀은 제외하기
    validTeam = []
    for t in num:
        if (t not in removeTeam):
            validTeam.append(t)

   # 팀 별 점수 리스트
    teamScore = dict()
    for j in range(len(validTeam)):
        name = validTeam[j]
        if (name not in teamScore):
            teamScore[name] = []
        teamScore[name].append(j+1)

   # 팀 별 점수 총합
    minTotal = float('inf')
    scoreTotal = dict()
    for k, v in teamScore.items():
        total = 0
        for n in range(4):
            total += v[n]

        scoreTotal[k] = [total, v[4]]
        minTotal = min(minTotal, total)

    # 총합이 낮은은 팀들 선별
    totalTeams = []
    for k, v in scoreTotal.items():
        total, fifth = v
        if (total == minTotal):
            totalTeams.append([k, fifth])

    totalTeams.sort(key=lambda x: x[1])

    print(totalTeams[0][0])
