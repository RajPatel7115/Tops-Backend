#include<Stdio.h>
main()
{
	int curr; //variable
	
	//input from user
	printf("Enter Currency :");
	scanf("%d",&curr);
	
	//checking condition
	if(curr==10)
	{
		printf("10rs Note Available!!");
	}
	else if(curr==20)
	{
		printf("20rs Note Available!!");
	}
	else if(curr==50)
	{
		printf("50rs Note Available!!");
	}
	else if(curr==100)
	{
		printf("100rs Note Available!!");
	}
	else
	{
		printf("Sorry!! %drs Note Not Available!!",curr);
	}

}
