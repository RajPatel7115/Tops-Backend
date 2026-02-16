def patt(n):
    for i in range(1,n):
        for j in range(1,i + 1):
            print("*",end=" ")
        print()


def tri(z):
    for i in range(1,z):
        for f in range(1,z-i):
            print(" ",end=" ")
        for j in range(1,i+1):
            print(" *",end=" ")
        print()

def left(k):
    for i in range(1, k + 1):
        print(" " * (k - i) + "*" * i)


while True:
    menu = """
        Press 1 For Right Angle 
        Press 2 For Triangle
        Press 3 For Left Angle
"""
    print(menu)
    choice = int(input("Enter Your Choice : "))

    if(choice==1):
        n = int(input("Enter number of rows: "))
        patt(n)
    elif(choice==2):
        z = int(input("Enter number of rows: "))
        tri(z)
    elif(choice==3):
        k = int(input("Enter number of rows: "))
        left(k)
    elif(choice==4):
        break