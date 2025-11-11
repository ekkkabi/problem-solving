T = int(input())
for test_case in range(1, T + 1):
    s = input().strip()
    days = ['SAT', 'FRI', 'THU', 'WED', 'TUE', 'MON', 'SUN']
    print(f'#{test_case} {days.index(s)+1}')
