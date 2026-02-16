def prime():
    num = int(input("Enter a number: "))
    if(num==2):
        print("Not Prime")
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                print(num, "is not a prime number")
                break
            else:
                print(num, "is a prime number")

def evod():
    n = int(input("ENter NUm For Even-Odd : "))
    if(n%2==0):
        print("Number Is Even!!")
    else:
        print("NUmber Is Odd!!")

def facto():
    n1 = int(input("Enter Number :"))
    fac = 1

    for i in range(1,n1+1):
        fac = fac * i

    print("Sum Of Number : ",fac)

while True:
    menu = """
    Press 1 For Prime
    Press 2 For Even-Odd
    Press 3 For Factorial
    Press 4 For Exit....
"""
    print(menu)
    choice = int(input("Enter Your Choice : "))

    if(choice==1):
        prime()
    elif(choice==2):
        evod()
    elif(choice==3):
        facto()
    elif(choice==4):
        break
