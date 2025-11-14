#include<iostream>
using namespace std;

class clac{
	public:
	   int addition(int a, int b){
	   	   return a+b;
	   }
	   int substraction(int a, int b){
	   	   return a-b;
	   }
	   int multiplication(int a, int b){
	   	   return a*b;
	   }
	   int division(int a, int b){
	   	   return a/b;
	   }
	};
int main()
{
	clac c;
	cout<<"Addition is "<<c.addition(10,20)<<endl;
	cout<<"Substraction is "<<c.substraction(20,10)<<endl;
	cout<<"Multiplication is "<<c.multiplication(10,20)<<endl;
	cout<<"Division is "<<c.division(20,10)<<endl;

	return 0;
	
}
