i = [1, "hello", True, 1.65, 1, "Python"]

i.append(100)
print(i) # For Adding Element At The End Of List

i.extend([1000, 2000])
print(i) # For Adding Multiple Element At The End Of List

print(i.index(1)) # To Get Index Of Element

i.insert(1, "Java")
print(i) # For Adding Element At Specific Index

i.pop(3)
print(i) # For Removing Element At Specific Index

i.remove(1)
print(i) # For Removing Element