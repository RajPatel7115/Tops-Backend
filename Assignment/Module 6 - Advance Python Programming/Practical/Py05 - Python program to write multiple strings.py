# Que : Write a Python program to write multiple strings into a file.

# List of strings to write to the file
lines = [
    "First line of text.\n",
    "Second line of text.\n",
    "Third line of text.\n"
]

# Open a file in write mode
with open("multilines.txt", "w") as file:
    # Write each string from the list to the file
    file.writelines(lines)
