#include<stdio.h>
main() 
{
    int p, r, n, st;
    p = 7900; // Principal
    r = 5;    // Rate
    n = 1     // By Year

    st=p*r*n/100; 

    printf("Simple Interest = %d\n", st);
}

