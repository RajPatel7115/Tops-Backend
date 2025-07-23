#include<stdio.h>
int square(int a);
void display(); //declare function

main()
{
	display();//function calling
	 
	int input;
	printf("Enter Number :");
	scanf("%d",&input);
	
	int result=square(input);
	printf("Square is %d",result);
}
void display() //implementation
{
	printf("Display Function Invoked\n");
}
int square(int a)
{
	return a*a;
}
