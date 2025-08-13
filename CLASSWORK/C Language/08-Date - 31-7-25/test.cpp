#include<stdio.h>

int main()
{
	int mathsmarks, sciencemarks, historymarks;
	int total;
	float per; // use float for percentage
	
	// taking input from user
	printf("Enter Maths Marks: ");
	scanf("%d", &mathsmarks);
	printf("Enter Science Marks: ");
	scanf("%d", &sciencemarks);
	printf("Enter History Marks: ");
	scanf("%d", &historymarks);
	
	// total calculation
	total = mathsmarks + sciencemarks + historymarks;
	
	// percentage calculation
	per = (total / 300.0) * 100;  // use 300.0 to ensure float division
	
	printf("Percentage = %.2f\n", per);  // print with 2 decimal places
	
	return 0;
}

