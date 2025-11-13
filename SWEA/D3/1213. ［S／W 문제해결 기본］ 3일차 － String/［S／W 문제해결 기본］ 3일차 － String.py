for test_case in range(10):
    t = int(input())
    target = input().strip()
    s = list(input().strip())
    answer = 0
    for i in range(0, len(s)-len(target)+1):
        if (''.join(s[i:i+len(target)]) == target):
            answer += 1

    print(f'#{test_case+1} {answer}')
