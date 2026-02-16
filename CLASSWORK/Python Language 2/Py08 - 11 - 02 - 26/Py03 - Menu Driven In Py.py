# MENU DRIVEN

while True: #Infinite loop
    menu = """
    Press 1 For Right Angle Pattern
    Press 2 For Factorial
    Press 3 For Prime Number
    Press 4 For Exit...

"""
    print(menu)

    choice = int(input("ENter Your Choice : "))

    if choice==1:
        for i in range(1, 6): # Right Angle Pattern ( Shortform PY )
            print("% " * i)

    elif choice==2:
        FacNum = int(input("Enter a number: "))
        fac = 1

        for i in range(1, FacNum + 1):
            fac *= i

        print("Factorial of", FacNum, "is", fac)

    elif choice==3:
        num = int(input("Enter a number: "))
        if num > 1:
            for i in range(2, num):
                if num % i == 0:
                    print(num, "is not a prime number")
                    break
                else:
                    print(num, "is a prime number")

    elif choice==4:
        print("Thank You !!")
        break
    
