#include<iostream>
using namespace std;
class emp
{
public:
    string name;
    int id,basicsal,da,hra,gross,tax,net,annualsal;
    void insertemp()
    {
        cout<<"Employee name :";
        cin>>name;
        cout<<"Enter employee ID";
        cin>>id;
        cout<<"Enter monthly salary :";
        cin>>basicsal;
        calc();

    }
    void calc()
    {
        annualsal=basicsal*12;
        da=2*annualsal/100;
        hra=3*annualsal/100;
        gross =annualsal+da+hra;
        tax=3*gross/100;
        net=annualsal-tax;
    }
    void show()
    {
        cout<<"emp ID :"<<id<<endl;
        cout<<"emp name :"<<name<<endl;
        cout<<"monthly basic salary :"<<basicsal<<endl;
        cout<<"annual salary :"<<annualsal<<endl;
        cout<<"DA :"<<da<<endl;
        cout<<"HRA :"<<hra<<endl;
        cout<<"gross :"<<gross<<endl;
        cout<<"TAX :"<<tax<<endl;
        cout<<"net salary :"<<net<<endl;

    }
};
int main()
{
    emp e1;
    e1.insertemp();
    e1.show();
    return 0;
}
