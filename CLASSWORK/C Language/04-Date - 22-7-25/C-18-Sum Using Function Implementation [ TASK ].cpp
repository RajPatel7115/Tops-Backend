#include<stdio.h>
int sum(int a,int b);
main()
{
	int a,b;
	printf("Enter Number One :");
	scanf("%d",&a);
	printf("Enter Number Two :");
	scanf("%d",&b);
	
	int result=sum(a,b);
	printf("Sum is %d",result);
}
int sum(int a,int b)
{
	return a*b;
}


