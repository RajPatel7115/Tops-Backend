import random
otp = int(random.randint(1000,9999))

d = {}

while True:
    menu = """
    Press 1 for SignUp
    Press 2 for Login
    Press 3 for Forgot Password
    Press 4 for Exit    
"""
    print(menu)
    choice = int(input("Enter Your Choice : "))

    if choice == 1:
        us_name = input("Enter Your Name : ")
        us_email = input("Enter Email : ")
        us_mno = int(input("Enter Mobile Number : "))
        us_passw = int(input("Enter Password : "))
        us_cpassw = int(input("Enter Password : "))
        
        if us_passw==us_cpassw:
            d['email']=us_email
            d['mno']=us_mno
            d['pass']=us_passw
            d['name']=us_cpassw
            print("Sign-Up Successful !!")
        else:
            print("Password Is Wrong!!")
    elif choice == 2:
        email = input("Enter Email : ")
        passw = int(input("Enter Password :"))

        if d['email'] == email:
            if d['pass'] == passw:
                print("Login Successful !!")
            else:
                print("Entered Password is Wrong")
        else:
            print("Entered Email is Wrong")
    elif choice == 3:
        f_mno = int(input("Enter Mobile No : "))

        if f_mno == d['mno']:
            print(otp)
            en_otp = int(input("Enter OTP :"))

            if en_otp == otp:
                nw_passw = int(input("Enter New Password :"))
                nw_cpassw = int(input("Confirm New Password :"))

                if nw_passw == nw_cpassw:
                    d['pass'] = nw_passw
                    print("Password Changed!!")
                else:
                    print("Password is wrong")
            else:
                print("Entered OTP is wrong")
        else:
            print("Mobile No Is Wrong")
    elif choice == 4:
        print("Thank you for reaching us")
        break
    else:
        print("Invalid Choice")