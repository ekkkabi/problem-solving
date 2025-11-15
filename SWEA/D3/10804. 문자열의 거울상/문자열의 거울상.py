T = int(input())
for test_case in range(1, T + 1):
    s = list(input().strip())
    dic = {
        'q': 'p', 'p': 'q',  'd': 'b', 'b': 'd'
    }
    answer = ''
    for ch in s[::-1]:
        answer += dic[ch]

    print(f'#{test_case}', answer)
