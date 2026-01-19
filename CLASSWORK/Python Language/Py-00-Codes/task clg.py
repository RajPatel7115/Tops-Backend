student = {}

# Student basic details
student["name"] = input("Enter student name: ")
student["college"] = input("Enter college name: ")

# Create marks dictionary
student["marks"] = {}

# Taking 5 subject marks from user
for sub in ["Math", "Science", "English", "Computer", "Gujrati"]:
    student["marks"][sub] = int(input(f"Enter marks of {sub}: "))

# Calculate total
total = sum(student["marks"].values())

# Calculate percentage
percentage = total / 5

# Find grade
if percentage >= 90:
    grade = "A"
elif percentage >= 75:
    grade = "B"
elif percentage >= 50:
    grade = "C"
else:
    grade = "D"

# Printing output
print("\n----- Student Result -----")
print("Name:", student["name"])
print("College:", student["college"])
print("Marks:", student["marks"])
print("Total Marks:", total)
print("Percentage:", percentage)
print("Grade:", grade)
