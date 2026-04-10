import random
ac_no = int(random.randint(1000,9999))

class Bank:
    def register(self):
        name = input("Enter Your Name : ")
        email = input("Enter Your Email :")
        pin = input("Enter Your Pin Number :")
        bal = 5000
        self.bal = bal
        self.pin = pin
        self.email = email
        self.name = name
        print("Generated Account Number is : ",ac_no)
        print("Your Account Is Generated !!")

    def deposit(self):
        che_accno = input("Enter Account Number :")
        che_pin = input("Enter Pin to Verify :")
        if che_accno == ac_no:
            if che_pin == self.pin:
                deamount = input("Enter Amount For Deposit :")
                self.bal+=deamount
                print("Deposit Successfully....Now Your Bal - ",self.bal)
            else:
                print("Wrong Account Pin !!")
        else:
            print("Wrong Account Number !!")


    def withdraw(self):
        che_accno = input("Enter Account Number :")
        che_pin = input("Enter Pin to Verify :")
        if che_accno == ac_no:
            if che_pin == self.pin:
                wiamount = input("Enter Amount For withdraw :")
                self.bal-=wiamount
                print("Withdraw Successfully....Now Your Bal - ",self.bal)
            else:
                print("Wrong Account Pin !!")
        else:
            print("Wrong Account Number !!")

    def balancee(self):
        che_accno = input("Enter Account Number :")
        che_pin = input("Enter Pin to Verify :")
        if che_accno == ac_no:
            if che_pin == self.pin:
                print("Your Balance : ",self.bal)
            else:
                print("Wrong Account Pin !!")
        else:
            print("Wrong Account Number !!")

obj = Bank()
while True:

    menu1 = """
Press 1 For Register
Press 2 For Exit
"""

    print(menu1)
    choice1 = input("Enter Your Choice :")

    if choice1 == "1":
        obj.register()
    elif choice1 == "2":
        print("Thank You For Choosing Khudka Bank !!")
        break
    else:
        print("Invalid Input 404 !!")

        menu2 = """
    Press 1 For Deposit
    Press 2 For Withdraw
    Press 3 For Check Balance
    Press 4 For Return To Menu
    Press 5 For Exit...
    """
    choice2 = input("Enter Your Choice :")

    if choice2 == "1":
        obj.deposit()
    elif choice2 == "2":
        obj.withdraw()
    elif choice2 == "3":
        obj.balancee()
    elif choice2 == "4":
        pass
    elif choice2 == "5":
        print("Thank You For Choosing ")
        break
