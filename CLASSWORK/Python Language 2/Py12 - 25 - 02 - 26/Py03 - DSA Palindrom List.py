#Two Pointer Method

l = [1,2,3,2,1]

left = 0
right = len(l)-1
ans = "Yes"

while(left<right):
    if l[left]==l[right]:

        left+=1
        right-=1
        continue
    else:
        ans = "No"
        break

print(ans)