import random

while True:
    print("\n************Stone Paper Scissor************\n")
    print("1. Stone")
    print("2. Paper")
    print("3. Scissor\n")

    choice = int(input("Enter your choice : "))

    if choice>3 or choice<1:
        print("Invalid Input")
        break

    result = random.randint(1,3)

    print("Ans Is :", result)

    if choice == result:
        print("Match is Draw")
    
    elif(choice == 1 and result == 3) or (choice == 2 and result == 1) or (choice == 3 and result == 2):
        print("You Win Game")
    
    else:
        print("You Lose The Game")
