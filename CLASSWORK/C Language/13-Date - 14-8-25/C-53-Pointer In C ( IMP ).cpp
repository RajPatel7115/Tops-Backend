#include<stdio.h>
main()
{
	int a=10;
	int *p;
	p=&a;
	
	printf("Varible Address %x\n",&a);
	printf("Pointer Address %x\n",p);
	printf("A value %d\n",a);
	printf("P value %d\n",*p);
	a=20;
	printf("Variable address %x\n",&a);
	printf("Pointer Address %x\n",p);
	printf("After change a value p value %d\n",*p);
	*p=30;
	printf("Varible Address %x\n",&a);
	printf("Pointer Address %x\n",p);
	printf("A value %d\n",a);
}
