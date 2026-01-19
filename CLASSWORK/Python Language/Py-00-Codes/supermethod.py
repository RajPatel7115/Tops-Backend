class Myclass:
    def fun1(self):
        print("Hello")

class Myclass2(Myclass):
    def fun1(self):
        super().fun1()
        print("Hello2")

obj = Myclass2()
obj.fun1()
