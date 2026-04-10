#include<iostream>
using namespace std;
class calc
{
public:
    int num1,num2;
    calc(int a,int b)
    {
        num1=a;
        num2=b;
    }
    void sum()
    {
        cout<< "sum is "<<num1<< "+"<<num2<< "="<<num1+num2<<endl;
    }
    void sub()
    {
        cout<< "substraction is "<<num1<< "-"<<num2<< "="<<num1-num2<<endl;
    }
    void mult()
    {
        cout<< "multiplication is "<<num1<< "*"<<num2<< "="<<num1*num2<<endl;
    }
    void div()
    {
        cout<< "division is "<<num1<< "/"<<num2<< "="<<num1/num2<<endl;
    }
};
int main()
{
    int a,b;
    cout<< "enter num1 :";
    cin>>a;
    cout<< "ennter num2 :";
    cin>>b;
    calc c1(a,b);
    c1.sum();
    c1.sub();
    c1.mult();
    c1.div();
    return 0;
}
