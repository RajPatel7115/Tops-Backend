#include<stdio.h>
#include<string.h>
struct stud
{
	int rollno;
	char name[20];
	char city[20];
};
main()
{
	struct studs[3];
	int r;
	char n[20];
	char c[20];
	
	for(int i=0;i<3;i++)
	{
		printf("Enter RollNo : ");
		scanf("%d",&s[i].rollno);
	   printf("\nEnter Name : ");
		scanf("%s",&s[i].name);
		printf("Enter City : ");
		scanf("%s",&s[i].city);
    }

for(int j=0;j<3;j++)
{
	printf("1st Student Details :\n");
	printf("RollNo %d\n",s[j].rollno);
	printf("Name %s\n",s[j].name);
	printf("City %s\n",s[j].city);
}
}
