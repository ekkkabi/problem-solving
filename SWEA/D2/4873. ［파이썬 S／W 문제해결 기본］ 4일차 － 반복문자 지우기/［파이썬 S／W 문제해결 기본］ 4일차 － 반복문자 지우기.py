T = int(input())

for test_case in range(1, T+1):
    text = input().strip()
    i = 0
    while (True):
        if (i == len(text)-1):
            break
        if (text[i] == text[i+1]):
            text = text[:i]+text[i+2:]
            i = 0
        else:
            i += 1

    print(f'#{test_case} {len(text)}')
