# Que: Write a Python program to access elements at different index positions.

# Create a sample list
sample_list = [10, "apple", 3.5, "banana", 42, "cat"]

# Access elements at different index positions
print("Element at index 0:", sample_list[0])    # First element
print("Element at index 2:", sample_list[2])    # Third element
print("Element at index -1:", sample_list[-1])  # Last element
print("Element at index 4:", sample_list[4])    # Fifth element

# loop to access all elements with their indices
for i in range(len(sample_list)):
    print(f"Element at index {i}: {sample_list[i]}")

