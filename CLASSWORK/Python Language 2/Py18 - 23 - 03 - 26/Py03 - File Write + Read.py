#File Write + Read

file = open("task3.txt","w+")
file.write("Hello W+")  # w+ = Write & read
print(file.tell()) # Tell Wheres the cursor
file.seek(0) # Move Cursor to number 0 (start)
print(file.read()) # Reads File
file.close() # Close File

