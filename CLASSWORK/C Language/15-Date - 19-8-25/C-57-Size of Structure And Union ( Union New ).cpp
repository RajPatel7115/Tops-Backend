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
	printf("Size of structure is : %d\n",sizeof(s1));
	printf("Size of union is : %d",sizeof(s2));
}
