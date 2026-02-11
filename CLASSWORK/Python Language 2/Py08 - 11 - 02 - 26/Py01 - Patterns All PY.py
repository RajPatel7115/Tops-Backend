for i in range(1,6):  # Right Angle Pattern
    for j in range(1,i + 1):
        print("*",end=" ")
    print()

for row in range(1, 6):   # Left Angle Pattern
    for coll in range(1, 6 - row):
        print(" ", end=" ")
    for space in range(1, row + 1):
        print("&",end=" ")
    print()

for i in range(1, 6): # Right Angle Pattern ( Shortform PY )
    print("% " * i)

n = 6 # Left Angle Pattern
for i in range(1, n + 1):
    print(" " * (n - i) + "@" * i)

n = 6 # Tringle Pattern ( Shortform PY  )
for i in range(1, n + 1):
    print(" " * (n - i) + " $" * i)


