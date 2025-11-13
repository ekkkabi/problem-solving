for test_case in range(1, 11):
    n = int(input())
    lst = list(map(int, input().strip().split()))

    i = 0
    diff = 1
    while ((lst[i]-diff) > 0):
        lst.append(lst[i]-diff)
        i += 1
        diff += 1
        if (diff > 5):
            diff = 1
    lst.append(0)

    print(f'#{test_case}', *lst[i+1:])
