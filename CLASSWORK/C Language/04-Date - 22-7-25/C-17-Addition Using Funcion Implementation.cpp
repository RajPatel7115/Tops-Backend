#include<stdio.h>
int addition(int a,int b);
main()
{
	int a,b;
	printf("Enter Number One :");
	scanf("%d",&a);
	printf("Enter Number Two :");
	scanf("%d",&b);
	
	int result=addition(a,b);
	printf("Addition is %d",result);
}
int addition(int a,int b)
{
	return a+b;
}


