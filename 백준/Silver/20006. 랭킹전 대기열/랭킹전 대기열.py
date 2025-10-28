import sys
input = sys.stdin.readline

p, m = map(int, input().strip().split(' '))
room = dict()

order = 1
for _ in range(p):
    level, name = (input().strip().split(' '))
    level = int(level)

    isIn = False
    for r in room:
        if (room[r]['min'] <= level <= room[r]['max']
           and len(room[r]['pl']) < m):
            room[r]['pl'].append([level, name])
            isIn = True
            break

    if not isIn:
        # 들어갈 방이 없을 경우(처음/레벨차이/풀방) => 방생성
        room[order] = {
            'min': level - 10,
            'max': level + 10,
            'pl': [[level, name]],
        }
        order += 1

for key in sorted(room.keys()):
    value = room[key]
    if (len(value['pl']) == m):
        print('Started!')
    else:
        print('Waiting!')
    for l, n in sorted(value['pl'], key=lambda x : x[1]):
        print(f'{l} {n}')
