# Que : Write a Python program to open a file in write mode, write some text, and then close it.

# Open a file in write mode
file = open("example.txt", "w")

# Write some text to the file
file.write("Hello, this is a sample text written to the file.\n")
file.write("This is the second line.")

# Close the file
file.close()
