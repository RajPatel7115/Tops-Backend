def summ(n):
    sum = 0
    for i in range(1, n+1):
       sum = sum + i

    return sum

n = int(input("Enter Number :"))
paste = summ(n)
print(paste)