# Que : Write a Python program that manipulates and prints strings using various string methods.

my_string = "  Hello, World! Welcome to Python programming.  "

# Strip leading and trailing whitespace
stripped = my_string.strip()
print("Stripped string:", stripped)

# Convert to uppercase
upper_case = stripped.upper()
print("Uppercase string:", upper_case)

# Convert to lowercase
lower_case = stripped.lower()
print("Lowercase string:", lower_case)

# Replace a substring
replaced = stripped.replace("World", "Universe")
print("After replacement:", replaced)

# Split string into a list of words
split_words = stripped.split()
print("Split into words:", split_words)

# Check if string starts with 'Hello'
starts_with_hello = stripped.startswith("Hello")
print("Starts with 'Hello':", starts_with_hello)

# Find position of substring 'Python'
index_python = stripped.find("Python")
print("Index of 'Python':", index_python)

# Check if string ends with a period
ends_with_period = stripped.endswith(".")
print("Ends with period:", ends_with_period)

# Capitalize first character
capitalized = stripped.capitalize()
print("Capitalized string:", capitalized)

# Title case (capitalize first letter of each word)
title_case = stripped.title()
print("Title case string:", title_case)
