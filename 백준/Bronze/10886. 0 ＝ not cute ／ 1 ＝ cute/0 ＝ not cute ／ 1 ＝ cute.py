n = int(input().strip())
lst = [int(input().strip()) for _ in range(n)]

ones = lst.count(1)
zeros = lst.count(0)
if (ones > zeros):
    isCute = 'cute'
else:
    isCute = "not cute"

print(f'Junhee is {isCute}!')
