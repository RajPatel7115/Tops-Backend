#menu driven using list

i = []
while(True):
    print("1. Add")
    print("2. Remove")
    print("3. Display")
    print("4. Exit")
    ch = int(input("Enter your choice:"))

    if ch == 1:
        n = int(input("Enter number:"))
        i.append(n)
    elif ch == 2:
        n = int(input("Enter number:"))
        i.remove(n)
    elif ch == 3:
        print(i)
    elif ch == 4:
        break