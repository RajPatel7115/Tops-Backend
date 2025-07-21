#include<stdio.h>
addition()
{
	int num1;
	int num2;
	int result;
	
	printf("Addition :\n");
	
	printf("Enter Number One :");
	scanf("%d",&num1);
	printf("Enter Number Two :");
	scanf("%d",&num2);
	
	result=num1+num2;
	
	printf("\nNumber %d + %d is : %d\n",num1,num2,result);
}
subtraction()
{
	int num1;
	int num2;
	int result;
	
	printf("\nSubtraction :\n");
	
	printf("Enter Number One :");
	scanf("%d",&num1);
	printf("Enter Number Two :");
	scanf("%d",&num2);
	
	result=num1-num2;
	
	printf("\nNumber %d - %d is : %d\n",num1,num2,result);
}
main()
{
	addition();
	subtraction();
}
