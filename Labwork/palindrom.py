n = input("Enter number: ")

rev = ""

for i in n:
    rev = i + rev

if n == rev:
    print("Palindrome")
else:
    print("Not Palindrome")