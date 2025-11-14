#include<iostream>
using namespace std;
class calc{
	public:
	  void add(int a, int b)
	  {
		cout<<"Addition is "<<a+b<<endl;
	  }
};
class sci:public calc{
	public:
	   void square(int a)
	   {
		cout<<"Square Is "<<a*a<<endl;
	   }
};
int main()
{
	sci s;
	s.square(10);
	s.add(10);

	return 0;
}
