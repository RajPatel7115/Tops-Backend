#include<iostream>
using namespace std;
class emp{
	public:
		int eid;
		void insertEmp(){
			cout<<"Enter Employee ID : ";
			cin>>eid;
		}
		void show(){
			cout<<eid<<endl;
		}
};
int main()
{
	emp e, e1; //instance of class
	e.insertEmp();
	e1.insertEmp();
	e.show();
	e1.show();
}
