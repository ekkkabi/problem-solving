import heapq
import sys
input = sys.stdin.readline

n = int(input())
heap = []
for _ in range(n):
    num = int(input())

    # 자연수가 아니면, 가장 작은 값 출력/ 그 값 배열에서 제거
    if num == 0:
        if (len(heap) == 0):
            print(0)
        else:
            print(heapq.heappop(heap))

    # 자연수, 배열에 값 추가
    else:
        heapq.heappush(heap, num)
