#include<iostream>
using namespace std;
class student{
	public:
	student()
	   {
		cout<<"Default constructor"<<endl;
	   }
	   void disp()
	   {
		cout<<"Disp"<<endl;
	   }
};
int main()
{
	student s1,s2;
	s1.disp();
	s2.disp();
	return 0;
}
