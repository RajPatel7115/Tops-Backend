# Que : Practical Example 8: Write a Python program to check if a person is eligible to donate blood using a nested if.

# Check blood donation eligibility based on age and weight

age = int(input("Enter Age : "))    
weight = float(input("Enter Weight : "))  

if age >= 18:
    if weight >= 50:
        print("You are eligible to donate blood.")
    else:
        print("You are not eligible to donate blood due to insufficient weight.")
else:
    print("You are not eligible to donate blood due to age restrictions.")

