import pymysql

mydb = pymysql.connect(host="localhost",user="root",password="")
mycursor = mydb.cursor()

mycursor.execute("create database if not exists amazon")
mydb.commit()

mydb = pymysql.connect(host="localhost",user="root",password="",database="amazon")
mycursor = mydb.cursor()

mycursor.execute("create table if not exists signup (id int primary key auto_increment,name varchar(20),email varchar(20),password int)")
mydb.commit()

