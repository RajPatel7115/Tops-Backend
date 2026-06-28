#  Que: Write a Python program to add elements to a list using insert() and append().

# Create an empty list
my_list = []

# Add elements to the end of the list using append()
my_list.append(10)
my_list.append("apple")
my_list.append(3.14)

print("List after using append():", my_list)

# Add elements at specific index positions using insert()
my_list.insert(1, "banana")   # Inserts at index 1
my_list.insert(0, 100)        # Inserts at index 0 (beginning)

print("List after using insert():", my_list)
