# Que : How to take user input using the input() function.

variable = input("prompt")


# Simple input with prompt:

name = input("Enter your name: ")
print("Hello, " + name + "!")

# Taking integer input:

age = int(input("Enter your age: "))
print("Your age is:", age)

# Taking float input:

price = float(input("Enter price: "))
print("Price entered:", price)

# Taking multiple inputs in one line:

x, y = input("Enter two numbers separated by space: ").split()
print("First number:", x)
print("Second number:", y)

# Converting multiple inputs to integers:

x, y = map(int, input("Enter two integers separated by space: ").split())
print("Sum is:", x + y)