import sys
input = sys.stdin.readline

n = int(input())

cnt = 0
for i in range(n):
    text = input().strip()
    sets = set()
    sets.add(text[0])

    isGroup = True
    for j in range(1, len(text)):
        word = text[j]
        before = text[j-1]

        if (word in sets):
            if (word == before):
                continue
            isGroup = False
            break
        sets.add(word)

    if (isGroup):
        cnt += 1
print(cnt)
