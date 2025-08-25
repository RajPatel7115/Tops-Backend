#include<stdio.h>
#include<string.h>

struct stud
{
	int rollno;
	char name[20];
	char city[20];
};
union stud1
{
	int rollno;
	char name[20];
	char city[10];
};
main()
{
	struct stud s[3],s1;
	union stud1 s2;
	
	s2.rollno=10;
	printf("RollNo is %d\n",s2.rollno);
	
	strcpy(s2.name,"Raj");
	printf("Name is %s\n",s2.name);
	
	strcpy(s2.city,"Isanpur");
	printf("City is %s\n",s2.city);
	
	printf("\nSize of structure is : %d\n",sizeof(s1));
	printf("Size of union is : %d",sizeof(s2));
}
