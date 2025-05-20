import sys
input = sys.stdin.readline

n = int(input())

keys = set()
key_lst = []
cnt = 0

for _ in range(n):
    word = (input().strip().split(' '))

    max_len = 0
    for i in range(len(word)):
        max_len = max(max_len, len(word[i]))

    # 단축키 지정
    found = False
    # 첫 단어가 단축키
    for i in range(len(word)):
        if (word[i][0].upper() not in keys):
            keys.add((word[i][0].upper()))
            key_lst.append((word[i][0].upper(), i, 0))
            found = True
            break

    # 첫 단어에서 못 찾을 경우
    if not found:
        for i in range(len(word)):
            for j in range(1, len(word[i])):
                if (word[i][j].upper() not in keys):
                    keys.add((word[i][j].upper()))
                    key_lst.append((word[i][j].upper(), i, j))
                    found = True
                    break
            if found:
                break

    if not found:
        print(' '.join(word))
        continue

    # 단어-단축키 출력
    result = []
    k, row, col = key_lst[cnt]
    for i in range(len(word)):
        char = ''
        for j in range(len(word[i])):
            if (word[i][j].upper() == k
               and (row == i and col == j)):
                char += f'[{word[i][j]}]'
            else:
                char += word[i][j]
        result.append(char)
    print(' '.join(result))
    cnt += 1
