#include<stdio.h>
int simpleInterest(int p, int r, int n, int st);
main()
{
    int p, r, n;
    int st;
	printf("Enter Principal: ");
    scanf("%d", &p);
	printf("Enter Rate: ");
    scanf("%d", &r);
	printf("Enter Year: ");
    scanf("%d", &n);

    int result = simpleInterest(p, r, n, st);
	printf("Simple Interest = %d\n", result);
}
int simpleInterest(int p, int r, int n, int st)
{
    return st=p*r*n/100;
}

