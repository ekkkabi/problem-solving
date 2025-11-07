T = int(input())

for test_case in range(1, T+1):
    text = list(input().strip())

    pattern = text[0]
    for i in range(1, 10):
        if text[:i] == text[i:i*2]:
            break
        pattern += text[i]

    print(f'#{test_case} {len(pattern)}')
