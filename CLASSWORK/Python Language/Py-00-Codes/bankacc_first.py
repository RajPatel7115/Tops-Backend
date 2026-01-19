import random
ac_num = random.randint(1000,9999)

class Bank:

    def ac_register(self):
        name = input("Enter Your Name :")
        email = input("Enter Your Email Id :")
        mno = int(input("Enter Your M.No :"))
        passw = int(input("Enter Password :"))

        balance = 0

        self.name = name
        self.balance = balance
        self.passw = passw
        print("Your Generated Account No Is :",ac_num)

    def ac_deposit(self):

        verify_ac = int(input("Enter Account Number : "))
        verify_passw1 = int(input("Enter Password : "))

        if verify_ac == ac_num:
            if verify_passw1 == self.passw:
                print("Login Success......\n")

                deamount = int(input("Enter Amount For Deposit :"))

                if deamount > 10000:
                    print("Enter Amount Below 10K")
                else:
                    self.balance += deamount
                    print("Success...Deposit Amount is -",deamount)
            else:
                print("Entered Pass Is Wrong")
        else:
            print("Entered Account Number Is Wrong")

    def ac_withdraw(self):

        verify_ac = int(input("Enter Account Number : "))
        verify_passw1 = int(input("Enter Password : "))

        if verify_ac == ac_num:
            if verify_passw1 == self.passw:
                print("Login Success......\n")

                wiamount = int(input("Enter Amount For Withdraw :"))

                if wiamount > 10000:
                    print("Enter Amount Below 10K")
                else:
                    self.balance -= wiamount
                    print("Success...Withdraw Amount is -",wiamount)
            else:
                print("Entered Pass Is Wrong")
        else:
            print("Entered Account Number Is Wrong")

    def che_balance(self):

        verify_ac = int(input("Enter Account Number : "))
        verify_passw1 = int(input("Enter Password : "))

        if verify_ac == ac_num:
            if verify_passw1 == self.passw:
                print("Login Success......\n")

                print("Your Current Balance Is :",self.balance)
        
            else:
                print("Entered Pass Is Wrong")
        else:
            print("Entered Account Number Is Wrong")

menu = """
Welcome To Private Bank Ltd.

Press 1 For Register
Press 2 For Exit

"""
print(menu)
choice = int(input("Enter Your Choice :"))

obj = Bank()

if choice == 1:
    obj.ac_register()

    while True:
        menu1 = """
        Press 1 For Deposit
        Press 2 For Withdraw
        Press 3 For Check Balance
        Press 4 For Exit
        """
        print(menu1)

        choice1 = int(input("Enter Your Choice :"))

        if choice1 == 1:
            obj.ac_deposit()

        elif choice1 == 2:
            obj.ac_withdraw()
        
        elif choice1 == 3:
            obj.che_balance()

        elif choice1 == 4:
            print("Thank You!!")
            break
else:
    print("Thank You!!!")