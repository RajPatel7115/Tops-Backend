# Que : Write a Python program to handle exceptions in a simple calculator (division by zero, invalid input).

try:
    # Read inputs from the user
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    # Perform division
    result = num1 / num2

except ZeroDivisionError:
    print("Error: Cannot divide by zero.")

except ValueError:
    print("Error: Invalid input. Please enter numeric values.")

else:
    print(f"The result of dividing {num1} by {num2} is {result}.")
