#include<iostream>
using namespace std;
class bank
{
    int balance=50000,withdraw,deposite;
public:
    void setbalance(int balance)
    {
        this->balance=balance;
    }
    int getbalance()
    {
        return balance;
    }
    void setwithdraw(int withdraw)
    {
        this->withdraw=withdraw;
    }
    int getwithdraw()
    {
        return withdraw;
    }
    void setdeposite(int deposite)
    {
        this->deposite=deposite;
    }
    int getdeposite()
    {
        return deposite;
    }
    void manage()
    {
        int choose,flag;
        do
        {
        cout<< "1.check balance"<<endl;
        cout<< "2.withdraw"<<endl;
        cout<< "3.deposite"<<endl<<endl<<endl;
        cout<< "choose your option"<<endl;
        cin>>choose;
        switch(choose)
        {
        case 1:
            cout<< "your balance is "<<balance<<endl;
            break;
        case 2:
            cout<< "enter amount to withdraw :";
            cin>>withdraw;
            if(withdraw<=balance)
            {
                cout<< "you succesfully withdraw "<<withdraw<< "rupees"<<endl;
                balance=balance-withdraw;
                cout<< "now your balance is"<<balance<<endl;
            }
            else
            {
                cout<< "influence balance"<<endl;
                cout<< "your balance is "<<balance<<endl;
            }
            break;
        case 3:
            cout<< "enter amount to deposite :";
            cin>>deposite;
            balance=balance+deposite;
            cout<< "you succesfully deposite "<<deposite<<endl;
            cout<< "now your balance is "<<balance<<endl;
        default:
            cout<< "select appropriate option "<<endl;

            }
            cout<< "select 4 for contineu.........";
            cin>>flag;
        }
        while(flag==4);
    }
};
int main()
{
    bank b1;
    b1.manage();
}
