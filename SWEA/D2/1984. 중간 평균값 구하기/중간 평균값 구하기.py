T = int(input())

for test_case in range(1, T+1):
    nums = list(map(int, input().strip().split()))

    nums.sort()
    nums = nums[1:9]

    print(f'#{test_case} {round(sum(nums)/8)}')
