#include<stdio.h>

void sortarray(int arr[],int size)
{
	for(int i=0;i<size-1;i++)
	{
		for(int j=i+1;j<size;j++)
		{
			if(arr[i]>arr[j])
			{
				int temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
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
	int a[5];
	for(int i=0;i<5;i++)
	{
		printf("Enter Number :");
		scanf("%d",&a[i]);
	}
	
	sortarray(a,5);
	
	printf("\nSorted Array Numbers Are :\n");
	printarray(a,5);
}
