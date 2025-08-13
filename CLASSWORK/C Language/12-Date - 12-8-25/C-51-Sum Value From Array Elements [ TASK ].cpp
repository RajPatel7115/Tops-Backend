#include<stdio.h>

int sumval(int arr[],int size)
{
	int sum=0;
	for(int i=0;i<size;i++)
	{
		sum += arr[i];
	}
	return sum;
}

void printarray(int arr[],int size)
{
	for(int i=0;i<size;i++)
	{
		printf("%d\n",arr[i]);
	}
}

main()
{
	int a[3];
	for(int i=0;i<3;i++)
	{
		printf("Enter Number :");
		scanf("%d",&a[i]);
	}
	printf("\nArray Numbers Are :\n");
	printarray(a,3);
	
	int sum = sumval(a, 3);
	printf("Sum of Elements Is : %d\n",sum);
}
