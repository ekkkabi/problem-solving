'''
n-1 개 원판을 기둥 1 -> 2 이동
n 번 원판을 기둥 1 -> 3 이동
n-1 개 원판을 기둥 2 -> 3 이동
=> 원판 n-1 개 일때 옮길 수 있으면, 원판 n개일때도 옮길 수 있음
'''

N = int(input())

def hanoi(a, b, n):
    # 원판 n 개를 a 번 기둥에서 b 번 기둥으로 옮기는 방법

    if (n == 1):
        print(a, b, end='\n')
        return

    # n-1 개의 원판을 기둥 a -> (6-a-b) 이동
    hanoi(a, 6-a-b, n-1)
    print(a, b, end='\n')
    hanoi(6-a-b, b, n-1)

print((1 << N) - 1)
hanoi(1, 3, N)