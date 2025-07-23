#include<stdio.h>
int div(int a,int b);
main()
{
	int a,b;
	printf("Enter Number One :");
	scanf("%d",&a);
	printf("Enter Number Two :");
	scanf("%d",&b);
	
	int result=div(a,b);
	printf("Sum is %d",result);
}
int div(int a,int b)
{
	return a/b;
}


