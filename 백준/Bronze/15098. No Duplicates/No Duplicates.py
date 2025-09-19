texts = list(input().strip().split())

dict = {}

isRepeated = False
for t in texts:
    if t in dict:
        isRepeated = True
        break

    dict[t] = 1

if (not isRepeated):
    print('yes')
else:
    print('no')