def fac():
    print("This is fac function")
def prime():
    print("This is prime function")
def rev():
    print("This is rev function")


while True: #infinite loop
    menu = """
press 1 for fac
press 2 for prime 
press 3 for reverse
press 4 for exit
"""
    print(menu)
    choice = int(input("Enter your choice: "))
    if choice == 1:
        fac()
    elif choice == 2:
        prime()
    elif choice == 3:
        rev()
    elif choice == 4:
        break
    else:
        print("Invalid choice, please try again.")
        break
