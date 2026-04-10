#include<iostream>
using namespace std;
class calc
{
public:
    int a,b;
    void insertdata()
    {
        cout<< "enter num1 :";
        cin>>a;
        cout<< "enter num2 :";
        cin>>b;
    }
    void sum()
    {
        cout<< "sum is "<<a+b;
    }
    void sub()
    {
        cout<< "substraction is "<<a-b;
    }
    void mult()
    {
        cout<< "multiplication is "<<a*b;
    }
    void div()
    {
        cout<< "div is "<<a/b;
    }
};
int main()
{
    calc c1;
    c1.insertdata();
    c1.mult();
}
