# Que : Practical Example 7: Write a Python program to calculate grades based on percentage using if-else ladder.

# Program to calculate grade based on percentage using if-else ladder

percent = float(input("Enter your percent: "))

if percent >= 90 and percent <= 100:
    print("Grade: A+")
elif percent >= 80:
    print("Grade: A")
elif percent >= 70:
    print("Grade: B")
elif percent >= 60:
    print("Grade: C")
elif percent >= 50:
    print("Grade: D")
elif percent >= 0:
    print("Grade: Fail")
else:
    print("Invalid Percentage! Please enter a value between 0 and 100.")
