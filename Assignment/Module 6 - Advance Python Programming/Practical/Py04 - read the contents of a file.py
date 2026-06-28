# Que : Write a Python program to read the contents of a file and print them on the console.

# Open the file in read mode
with open("example.txt", "r") as file:
    
    # Read the contents of the file
    content = file.read()

# Print the contents
print(content)
