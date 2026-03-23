# UNIQUE IN List Comprehension

fruits = ["apple", "banana","anar", "anar", "cherry", "kiwi", "mango"]
unique = []

new_list = [unique.append(x) for x in fruits if x not in unique]
dup = [x for x in fruits if fruits.count(x) > 1]

print(unique)
print(dup)

# Dup IN List Comprehension

fruits = ["apple", "banana","anar", "anar", "cherry", "kiwi", "mango"]
unique = []
dup = []
new_list = [unique.append(x) if x not in unique else dup.append(x) for x in fruits]
# dup = [x for x in fruits if fruits.count(x) > 1]

print(unique)
# print(dup)
print(dup)