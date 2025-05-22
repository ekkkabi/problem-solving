import sys
input = sys.stdin.readline

n = int(input())
arr = []
for _ in range(n):
    team, time = input().strip().split(' ')
    minute, second = map(int, time.split(':'))
    arr.append([int(team), (minute*60 + second)])

teamsTime = {
    1: 0,
    2: 0
}

teamsScore = {
    1: 0,
    2: 0
}


def getWinTeam():
    if teamsScore[1] > teamsScore[2]:
        return 1
    elif teamsScore[2] > teamsScore[1]:
        return 2
    else:
        return -1


gameTime = 48 * 60
prevTime = 0

for i in range(len(arr)):
    currTeam, currTime = arr[i]

    # 이기고 있는 팀
    winTeam = getWinTeam()

    # 비기지 않을 경우
    if (winTeam != -1):
        teamsTime[winTeam] += currTime - prevTime

    # 현재 팀에 대해 득점 카운트
    teamsScore[currTeam] += 1

    prevTime = currTime


winTeam = getWinTeam()
if (winTeam != -1):
    teamsTime[winTeam] += gameTime - prevTime


for team, time in teamsTime.items():
    minute = time // 60
    second = time % 60
    print(f'{minute:02d}:{second:02d}')
