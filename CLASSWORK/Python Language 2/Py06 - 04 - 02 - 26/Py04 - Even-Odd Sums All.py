i = 1
ev = 0
od = 0
evsum = 0
ofsum = 0
sum = 0

while(i<=5):
    n = int(input("Enter Number :"))
    if(n%2==0):
        print(n,"Is Even!!")
        ev+=1
        evsum=evsum+i
    else:
        print(n,"Is Odd!!")
        od+=1
        odsum=odsum+i
    sum=sum+i
    i+=1
    
print("Total Evens - ",ev)
print("Total Odds - ",od)

print("Sum Of Evens - ",evsum)
print("Sum Of Odds - ",odsum)

print("Totals Of Numbers :",sum)

