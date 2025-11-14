#include<iostream>
using namespace std;

class student{
	public:
	  int rollno;
	  string name;
	  string city;

	  void EnterStudent(int r, string n, string c)
	  {
		  rollno = r;
		  name = n;
		  city = c;
	  }
	  void ShowStudent()
	  {
		cout<<rollno<<endl<<name<<endl<<city<<endl;
	  }
    };
int main()
{
	student s1;
	s1.EnterStudent(101, "Aman", "Delhi");
	s1.ShowStudent();
	return 0;
	
}
