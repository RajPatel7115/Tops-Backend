#Abstraction = Data Hiding

from abc import ABC,abstractmethod

class Employer(ABC): #abstract class
    def salary(self): #abstract method
        pass

class Raj(Employer):
    def salary(self):
        print("Raj Got 50k")

class Ved(Employer):
    def salary(self):
        print("Ved Got 40K")

class Ved1(Employer):
    def salary(self):
        print("Ved 1 Got 30k")

obj = Raj()
obj.salary()

obj1 = Ved()
obj1.salary()

obj2 = Ved1()
obj2.salary()