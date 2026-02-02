a = int(input("Enter Number 1 : "))
b = int(input("Enter Number 2 : "))

#With using third variable - Type - 1
temp = a
a = b
b = temp

#Without using third variable - Type - 2

a = a+b #100+50 - 150
b = a-b #150-50 - 100
a = a-b #150-100 - 50

#With method ( Only For Python ) - Type - 3
a,b = b,a

print("Number A = ",a)
print("Number B = ",b)

