i = [-1,-2,-3,-4,-5]

left = 0
right = len(i)-1

while(left<right):
    temp = i[left]
    i[left] = i[right]
    i[right] = temp

    left+=1
    right-=1

print(i)

