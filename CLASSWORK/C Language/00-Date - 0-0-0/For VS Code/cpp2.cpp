#include<iostream>
using namespace std;

class employee {
	public:
	int empid;
	string name;
	string city;
	float basic;

	void EnterEmployee(int id, string n, string c, float b)
	{
		empid = id;
		name = n;
		city = c;
		basic = b;
	}

	void ShowEmployee()
	{
		cout << "\nEmployee Details:\n";
		cout << "ID : " << empid << endl;
		cout << "Name : " << name << endl;
		cout << "City : " << city << endl;
		cout << "Basic Salary : " << basic << endl;
	}

	void ShowSalary()
	{
		float da = basic * 2 / 100;
		float hra = basic * 3 / 100;
		float gross = basic + da + hra;
		float tax = gross * 3 / 100;
		float net = gross - tax;

		cout << "\nSalary Breakdown:\n";
		cout << "DA : " << da << endl;
		cout << "HRA : " << hra << endl;
		cout << "Gross : " << gross << endl;
		cout << "Tax : " << tax << endl;
		cout << "Net Salary : " << net << endl;
	}
};

int main()
{
	employee e[10];
	int total = 0;
	int n;

	cout << "Enter How Many Employees You Want To Add : ";
	cin >> n;

	for(int i=0; i<n; i++)
	{
		int id;
		string name, city;
		float basic;

		cout << "\nEnter Employee ID : ";
		cin >> id;
		cout << "Enter Name : ";
		cin >> name;
		cout << "Enter City : ";
		cin >> city;
		cout << "Enter Basic Salary : ";
		cin >> basic;

		e[total].EnterEmployee(id, name, city, basic);
		total++;
	}

	int opt;
	cout << "\nEnter Employee ID To Search : ";
	cin >> opt;

	bool found = false;
	for(int i=0; i<total; i++)
	{
		if(e[i].empid == opt)
		{
			e[i].ShowEmployee();

			int choice;
			cout << "\nPress 2 For Salary Details\n";
			cout << "Press 1 To Exit\n";
			cout << "Enter Choice : ";
			cin >> choice;

			if(choice == 2)
			{
				e[i].ShowSalary();
			}
			else if(choice == 1)
			{
				cout << "\nExiting...\n";
			}
			found = true;
			break;
		}
	}

	if(!found)
	{
		cout << "\nEmployee Not Found.\n";
	}

	return 0;
}