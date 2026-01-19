class myclass1:
    def __init__(self):
        self.college = {}
    
    def parent(self):
        self.college["student1"] = input("Enter Your Name :")
        self.college["student2"] = input("Enter Your Name :")
        self.college["student3"] = input("Enter Your Name :")
        
class myclass2:
    def parent2(self):
        for key, value in self.college.items():
            print(key, value)

class myclass3(myclass1, myclass2):
    def child(self):
        print("Child Class")

obj = myclass3()
obj.parent()
obj.parent2()
obj.child()