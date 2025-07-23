#include<stdio.h>
int square(int num, int n);
main()
{
    int num, n;
	printf("Enter a Number: ");
    scanf("%d", &num);

    n=square(num, n);
	printf("Square of %d is: %d\n",num,n);
}
int square(int num, int n)
{
    return n=num*num;
}

