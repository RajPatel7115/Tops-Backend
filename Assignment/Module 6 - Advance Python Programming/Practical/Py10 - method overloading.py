# Que : Write Python programs to demonstrate method overloading and method overriding.

#  Method Overriding
     # A child class redefines a method from its parent class.

class Animal:
    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):
    def sound(self):  # Override the sound method
        print("Dog barks")

# Usage
animal = Animal()
dog = Dog()

animal.sound()  # Output: Animal makes a sound
dog.sound()     # Output: Dog barks

#  Method Overloading Simulation

class MathOperations:
    # Method with default arguments simulating overloading
    def add(self, a, b, c=None):
        if c is not None:
            return a + b + c
        else:
            return a + b

# Usage
math_op = MathOperations()
print(math_op.add(2, 3))       # Output: 5
print(math_op.add(2, 3, 4))    # Output: 9







