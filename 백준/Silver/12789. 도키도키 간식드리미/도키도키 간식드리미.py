n = int(input())
row = list(map(int, input().strip().split()))
row.reverse()
rest = []

cnt = 1
while (row or rest):
    if (row and row[-1] == cnt):
        row.pop()
        cnt += 1
    elif (rest and rest[-1] == cnt):
        rest.pop()
        cnt += 1
    elif row:
        rest.append(row.pop())
    else:
        print('Sad')
        break

else:
    print('Nice')
