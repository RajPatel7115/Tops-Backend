# Que: Write a Python program to remove elements from a list using pop() and remove().

# Create a sample list
my_list = [10, "apple", 3.14, "banana", 42]

# Remove an element by value using remove()
my_list.remove("apple")   # Removes the first occurrence of "apple"
print("List after remove():", my_list)

# Remove an element by index using pop()
popped_element = my_list.pop(2)  # Removes the element at index 2
print("Popped element:", popped_element)
print("List after pop():", my_list)

# Remove the last element using pop() with no arguments
last = my_list.pop()
print("Last element removed:", last)
print("Final list:", my_list)
