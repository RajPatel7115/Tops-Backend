# Que : Write a Python program to create a calculator using functions.

def addition(a, b):
    return a + b

def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b == 0:
        return "Error: Division by zero is not allowed."
    return a / b

def calculator():
    while True:
        print("\nOptions:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Exit")
        
        choice = input("Enter choice (1-5): ")
        
        if choice == '5':
            print("Exiting calculator.")
            break
        
        if choice in ('1', '2', '3', '4'):
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
            except ValueError:
                print("Invalid input! Please enter numeric values.")
                continue
            
            if choice == '1':
                print(f"Result: {addition(num1, num2)}")
            elif choice == '2':
                print(f"Result: {subtraction(num1, num2)}")
            elif choice == '3':
                print(f"Result: {multiplication(num1, num2)}")
            elif choice == '4':
                print(f"Result: {division(num1, num2)}")
        else:
            print("Invalid choice! Please select from 1 to 5.")

# Run the calculator program
calculator()
