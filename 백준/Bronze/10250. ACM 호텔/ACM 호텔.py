T = int(input())

def rooms(arr):
    h, w, n = arr

    floor = n % h
    if floor == 0:
        floor = h

    room = (n-1) // h + 1

    return (floor * 100 + room)

for _ in range(T):
    inputs = (list(map(int, input().split())))
    print(rooms(inputs))
