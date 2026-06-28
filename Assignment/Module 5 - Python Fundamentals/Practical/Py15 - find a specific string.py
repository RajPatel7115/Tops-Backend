# Que : Practical Example 3: Write a Python program to find a specific string in the list using a simple for loop and if condition.

# List of fruits
fruits = ['apple', 'banana', 'mango']

# String to find
search_fruit = 'banana'

# Flag to indicate if found
found = False

# Loop through the list to find the string
for fruit in fruits:
    if fruit == search_fruit:
        found = True
        break

# Output result
if found:
    print(f"'{search_fruit}' was found in the list.")
else:
    print(f"'{search_fruit}' was not found in the list.")
