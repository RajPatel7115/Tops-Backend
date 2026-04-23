from task1 import *

mydb = pymysql.connect(host="localhost", user="root", password="", database="amazon")
mycursor = mydb.cursor()

while True:
    menu = """
    press 1 for Insert Data
    press 2 for Read Data
    press 3 for Update Data
    press 4 for Delete Data
    press 5 for Exit
    """

    print(menu)
    choice = int(input("Enter Choice : "))

    if choice == 1:
        name = input("Enter Name : ")
        email = input("Enter Email : ")
        password = int(input("Enter Password : "))

        query = "insert into signup (name,email,password) values ('%s','%s','%s')"
        args = (name, email, password)

        mycursor.execute(query % args)
        mydb.commit()

        print("Data Inserted!!")

    elif choice == 2:
        query = "select * from signup"

        mycursor.execute(query)
        data = mycursor.fetchall()

        print(data)

    elif choice == 3:
        id = int(input("Enter Id : "))
        name = input("Enter Name : ")
        email = input("Enter Email : ")
        password = int(input("Enter Password : "))

        query = "update signup set name='%s',email='%s',password='%s' where id='%s'"
        args = (name, email, password, id)

        mycursor.execute(query % args)
        mydb.commit()

        print("Data Updated!!")

    elif choice == 4:
        id = int(input("Enter Id : "))

        query = "delete from signup where id='%s'"
        args = (id)

        mycursor.execute(query % args)
        mydb.commit()

        print("Data Deleted!!")

    elif choice == 5:
        break

    else:
        print("Invalid Choice")