# Que : Write Python programs to demonstrate different types of inheritance (single, multiple, multilevel, etc.).

# 1. Single Inheritance
# A child class inherits from one parent class.

class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):  # Dog inherits from Animal
    def bark(self):
        print("Dog barks")

# Usage
dog = Dog()
dog.speak()  # inherited method
dog.bark()   # child method

# 2. Multiple Inheritance
# A child class inherits from more than one parent class.

class Flyer:
    def fly(self):
        print("Flying")

class Swimmer:
    def swim(self):
        print("Swimming")

class Duck(Flyer, Swimmer):  # Duck inherits from Flyer and Swimmer
    def quack(self):
        print("Quack")

# Usage
duck = Duck()
duck.fly()    # from Flyer
duck.swim()   # from Swimmer
duck.quack()  # own method

# 3. Multilevel Inheritance
# A class inherits from a class which itself inherits from another class.

class Vehicle:
    def move(self):
        print("Vehicle moves")

class Car(Vehicle):
    def drive(self):
        print("Car drives")

class SportsCar(Car):
    def turbo(self):
        print("SportsCar uses turbo boost")

# Usage
sc = SportsCar()
sc.move()   # from Vehicle
sc.drive()  # from Car
sc.turbo()  # own method

# 4. Hierarchical Inheritance
# Multiple classes inherit from the same parent class.

class Parent:
    def greet(self):
        print("Hello from Parent")

class Child1(Parent):
    def feature1(self):
        print("Feature of Child1")

class Child2(Parent):
    def feature2(self):
        print("Feature of Child2")

# Usage
c1 = Child1()
c2 = Child2()
c1.greet()  # inherited
c2.greet()  # inherited
c1.feature1()
c2.feature2()