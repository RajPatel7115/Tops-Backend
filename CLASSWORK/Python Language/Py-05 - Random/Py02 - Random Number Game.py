import random
number = random.randint(1,50)

while True:
    print("\n************Guess The Number************\n")
    choice = int(input("Enter Your Guess : "))

    if choice>50 or choice<1:
        print("Invalid Input")
        break

    elif choice==number:
        print("You Win")
        break
    
    elif choice<number:
        print("Original number is greater than choice number")

    else:
        print("Original number is less than choice number")