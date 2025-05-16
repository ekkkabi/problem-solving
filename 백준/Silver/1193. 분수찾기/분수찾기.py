x = int(input())

stage = 0
for i in range(1, x+1):
    if (i * (i + 1) // 2 >= x):
        stage = i
        break


idx = x - ((stage-1) * stage // 2)

if (stage % 2 == 0):
    print(f'{idx}/{stage-idx+1}')
else:
    print(f'{stage-idx + 1}/{idx}')
