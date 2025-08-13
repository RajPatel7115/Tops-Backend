#include<stdio.h>
void disp()
{
	int x=10;
	static int y=10;
	printf("x=%d y=%d\n",x,y);
	x++;
	y++;
}
main()
{
	disp();
	disp();
	disp();
}
