students = {}   # main dictionary

n = int(input("How many students? "))

for i in range(n):
    name = input("Enter student name: ")
    
    subjects = {}
    m = int(input("How many subjects? "))
    
    for j in range(m):
        sub = input("Enter subject: ")
        marks = int(input("Enter marks: "))
        subjects[sub] = marks
    
    students[name] = subjects

# ✅ Clean Output
print("\n----- Student Report -----")

for name, subjects in students.items():
    print("\nStudent Name:", name)
    print("----------------------")
    
    for sub, marks in subjects.items():
        print(f"{sub:10} : {marks}")