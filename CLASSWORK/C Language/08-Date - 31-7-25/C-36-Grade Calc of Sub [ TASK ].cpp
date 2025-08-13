#include<stdio.h>
main()
{
	int mathsmarks,sciencemarks,historymarks;
	int total;
	int per;
	
	//taking input from user
	printf("Enter Maths Marks :");
	scanf("%d",&mathsmarks);
	printf("Enter Science Marks :");
	scanf("%d",&sciencemarks);
	printf("Enter History Marks :");
	scanf("%d",&historymarks);
	
	//total calc
	total=mathsmarks+sciencemarks+historymarks;
	
	//percentage of total
	per=total*100/300;
	
	if(per > 90)
	{
		printf("Grade is : A++ \n");
	}
	else if(per >= 30 && marks < 70)
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
