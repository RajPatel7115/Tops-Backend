# Que : Write a Python program to demonstrate handling multiple exceptions.

try:
    # Input two numbers
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))

    # Perform division
    result = num1 / num2

except (ZeroDivisionError, ValueError) as e:
    print(f"An error occurred: {e}")

else:
    print(f"The result of dividing {num1} by {num2} is {result}.")

