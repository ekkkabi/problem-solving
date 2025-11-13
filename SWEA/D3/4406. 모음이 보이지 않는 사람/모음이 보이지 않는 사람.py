T = int(input())
for test_case in range(1, T + 1):
    s = list(input().strip())
    vowel = 'aeiou'
    answer = ''
    for ch in s:
        if ch not in vowel:
            answer += ch

    print(f'#{test_case} {answer}')
