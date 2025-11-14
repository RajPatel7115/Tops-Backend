#include<stdio.h>
int main()
{
	int amount;
	printf("Enter Amount : ");
	scanf("%d",&amount);

	int notes[] = {2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
	int count[11];

	for(int i=0;i<11;i++)
	{
		count[i] = amount / notes[i];
		amount = amount % notes[i];
	}

	printf("\nCurrency  Count\n");
	for(int i=0;i<11;i++)
	{
		if(count[i] > 0)
		{
			printf("%d : %d\n", notes[i], count[i]);
		}
	}
}
