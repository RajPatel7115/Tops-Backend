#File Write In New File.....

file = open("Task1.txt","w")
file.write("Write Method Test!!")
file.close()

#File Open Existing....

file = open("Task1.txt","r")
d = file.read()
print(d)
file.close()

#File Write Loop.......

l = []
for i in range(1,31):
    l.append(i)
file = open("Task2.txt","w")
file.write(str(l))
file.close()
