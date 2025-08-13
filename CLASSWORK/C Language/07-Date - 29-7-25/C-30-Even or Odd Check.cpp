#include<stdio.h>
main()
{
	int number;
	
	//taking number from user
	printf("enter the number :");
	scanf("%d", &number);
	
	//checking even or odd
	printf("\t\n");
	if(number %2==0){printf("the number %d is even", number)
	;}
	else{printf("the number %d is odd", number)
	;}
}
