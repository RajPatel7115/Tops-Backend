#include<stdio.h>
main()
{
	int num1;
	int num2;
	int result;
	
	printf("Enter Number One :");
	scanf("%d",&num1);
	printf("Enter Number Two :");
	scanf("%d",&num2);
	
	result=num1+num2;
	
	printf("\nNumber %d + %d is : %d\n",num1,num2,result);
}
