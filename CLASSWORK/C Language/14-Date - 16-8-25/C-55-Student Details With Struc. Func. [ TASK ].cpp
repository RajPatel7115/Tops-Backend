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
	struct stud s[100];
	int n, total=0;

	printf("Enter How Many Student Details You Want To Enter : ");
	scanf("%d",&n);

	for(int i=0;i<n;i++)
	{
		printf("\nEnter RollNo : ");
		scanf("%d",&s[total].rollno);
		printf("Enter Name : ");
		scanf("%s",&s[total].name);
		printf("Enter City : ");
		scanf("%s",&s[total].city);
		total++;
	}

	int opt;
	printf("\nPress 4 To Continue : ");
	scanf("%d",&opt);

	if(opt==4)
	{
		int choice;
		printf("\n1. Enter Student\n");
		printf("2. Show Student\n");
		printf("Enter Your Choice : ");
		scanf("%d",&choice);

		if(choice==1)
		{
			int more;
			printf("\nHow Many More Student Details You Want To Enter : ");
			scanf("%d",&more);

			for(int i=0;i<more;i++)
			{
				printf("\nEnter RollNo : ");
				scanf("%d",&s[total].rollno);
				printf("Enter Name : ");
				scanf("%s",&s[total].name);
				printf("Enter City : ");
				scanf("%s",&s[total].city);
				total++;
			}

			printf("\nAll Student Details :\n");
			for(int j=0;j<total;j++)
			{
				printf("\nStudent %d Details :\n",j+1);
				printf("RollNo %d\n",s[j].rollno);
				printf("Name %s\n",s[j].name);
				printf("City %s\n",s[j].city);
			}
		}
		else if(choice==2)
		{
			printf("\nAll Student Details :\n");
			for(int j=0;j<total;j++)
			{
				printf("\nStudent %d Details :\n",j+1);
				printf("RollNo %d\n",s[j].rollno);
				printf("Name %s\n",s[j].name);
				printf("City %s\n",s[j].city);
			}
		}
	}
}
