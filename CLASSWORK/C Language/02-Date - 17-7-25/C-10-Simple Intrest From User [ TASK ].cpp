#include<stdio.h>
main() 
{
    int p, r, n, st;
    
    printf("Enter Principal : ");
    scanf("%d",&p);
    printf("Enter Rate : ");
    scanf("%d",&r);
    printf("Enter Year :");
    scanf("%d",&n);
    
    st=p*r*n/100;

    printf("Simple Interest = %d\n", st);
}

