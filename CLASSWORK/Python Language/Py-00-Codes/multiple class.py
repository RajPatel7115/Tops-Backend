class myclass1:
    def parent(self):
        print("Parents One")

class myclass2:
    def parent2(self):
        print("Parents Two")

class myclass3(myclass1, myclass2):
    def child(self):
        print("Child Class")

obj = myclass3()
obj.parent()
obj.parent2()
obj.child()