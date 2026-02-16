def hello():
    a = 10
    b = 20

    return a+b

result = hello()
print(result)

def fact():
    fac = 1
    for i in range (1,6):
        fac=fac*i
    
    return fac

print(fact())