arr = [input().strip() for _ in range(3)]
arr = [int(x) if x.isnumeric() else x for x in arr]


for i in range(3):
    if type(arr[i]) == type(1):
        num = ((3-i) + arr[i])

        if (num % 3 == 0 and num % 5 == 0):
            print('FizzBuzz')
        elif (num % 3 == 0 and num % 5 != 0):
            print('Fizz')
        elif (num % 3 != 0 and num % 5 == 0):
            print('Buzz')
        else:
            print(num)
        break
