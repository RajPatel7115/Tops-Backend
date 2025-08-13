#include<stdio.h>
main()
{
	int choose;
	int flag;
	
	do{
		printf("1. C Language\n");
		printf("2. C++ Language\n");
		printf("3. Java Language\n\n");
		
		printf("Enter Your Option :");
		scanf("%d",&choose);
		
		switch(choose)
		{
			case 1:
				printf("You Selected C Language\n");
				break;
			case 2:
				printf("You Selected C++ Language\n");
				break;
			case 3:
				printf("You Selected Java Language\n");
				break;
			default:
				printf("Please Inpur Correct Option\n");
		}
		printf("Press 4 For Continue...");
		scanf("%d",&flag);
	}
	while(flag==4);
}
