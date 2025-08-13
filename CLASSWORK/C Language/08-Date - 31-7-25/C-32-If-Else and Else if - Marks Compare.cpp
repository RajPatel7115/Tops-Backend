#include<stdio.h>
main()
{
	int marks;
	printf("Enter Your Marks :");
	scanf("%d", &marks);
	
	if(marks < 30 )
	{
		printf("Grade is : C \n");
	}
	else if(marks >= 30 && marks < 70)
	{
		printf("Grade is : B \n");
	}
	else if(marks >= 70 && marks < 90)
	{
		printf("Grade is : A \n");
	}
	else
	{
		printf("Grade is : A++ \n");
	}
}
