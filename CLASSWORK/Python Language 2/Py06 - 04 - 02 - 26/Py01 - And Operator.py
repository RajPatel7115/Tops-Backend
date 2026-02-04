n1 = int(input("Enter Number One : "))
n2 = int(input("Enter Number Two : "))
n3 = int(input("Enter Number Three : "))
n4 = int(input("Enter Number Four : "))

if n1>n2 and n1>n3 and n1>n4:
    print(n1,"Is Greatest!!")
elif n2>n1 and n2>n3 and n2>n4:
    print(n2,"Is Greatest!!")
elif n3>n1 and n3>n2 and n3>n4:
    print(n3,"Is Greatest!!")
else:
    print(n4,"Is Greatest!!")
