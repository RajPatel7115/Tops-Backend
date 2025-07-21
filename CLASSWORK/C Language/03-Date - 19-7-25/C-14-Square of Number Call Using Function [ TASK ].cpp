#include<stdio.h>
NumSquare()
{
	int num;
	
	printf("Enter Number For Square : ");
	scanf("%d",&num);
	
	int b=num*num;
	
	printf("Number is : %d\n",b);
}

main()
{
	NumSquare();
}
