n = int(input())
lst = [list(input().strip()) for _ in range(n)]

la, ra, waist, ll, rl = 0, 0, 0, 0, 0

# 머리 찾기
head = [0, 0]
for row in range(n):
    if ((lst[row].count('*')) == 1):
        head[0] = row
        break
for col in range(n):
    if (lst[head[0]][col] == '*'):
        head[1] = col
        break

# 심장 찾기
heart = [head[0]+1, head[1]]

# 팔 찾기
for col in lst[heart[0]][:heart[1]]:
    if (col == '*'):
        la += 1
for col in lst[heart[0]][heart[1]+1:]:
    if (col == '*'):
        ra += 1

# 허리 찾기
for row in range(heart[0]+1, n-1):
    if (lst[row][heart[1]] == '*'):
        waist += 1

# 다리 찾기
for row in range(heart[0] + waist + 1, n):
    if lst[row][heart[1]-1] == '*':
        ll += 1
for row in range(heart[0] + waist + 1, n):
    if lst[row][heart[1]+1] == '*':
        rl += 1

print(f'{heart[0] + 1} {heart[1] + 1}')
print(f'{la} {ra} {waist} {ll} {rl}')
