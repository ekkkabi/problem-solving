import sys
input = sys.stdin.readline

scores = {
    'A': 0,
    'B': 0
}

aLst = list(map(int, input().strip().split()))
bLst = list(map(int, input().strip().split()))

for i in range(10):
    if (aLst[i] > bLst[i]):
        scores['A'] += 1
    elif (aLst[i] < bLst[i]):
        scores['B'] += 1

if (scores['A'] > scores['B']):
    print('A')
elif (scores['A'] == scores['B']):
    print('D')
else:
    print('B')
