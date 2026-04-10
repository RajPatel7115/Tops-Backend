#include<iostream>
using namespace std;
class event
{
public:
    string eventname,firstname,lastname;
    int guests,time,servers,cost1,cost2;
    //void setservers
    double costperhour=18.50;
    double costperminutes=0.40;
    double costforfood=20.70;
    double totalfood,totalcost,averagecost,costforoneserver,deposite;

    void insertdata()
    {
        cout<< "____________________________________Event Management System____________________________________"<<endl;
        cout<< "Enter Event Name :";
        cin>>eventname;
        cout<< "Enter customer's first and last name :";
        cin>>firstname>>lastname;
        cout<< "enter number of guests :";
        cin>>guests;
        cout<< "enter the number of minutes in the event ";
        cin>>time;
        calc();
    }
    void calc()
    {
        servers=guests/20;
        cost1=(time/60)*costperhour;
        cost2=(time%60)*costperminutes;
        costforoneserver=cost1+cost2;
        totalfood=guests*costforfood;
        averagecost=totalfood/guests;
        totalcost=totalfood+(costforoneserver*servers);
        deposite=totalcost*25/100;
    }
    void show()
    {
        cout<< "____________________________________event estimate for :"<<firstname<< " "<<lastname<< "____________________________________"<<endl;
        cout<< "Number Of severs :"<<servers<<endl;
        cout<< "The Cost For One Server :"<<costforoneserver<<endl;
        cout<< " The Cost For Food Is :"<<totalfood<<endl;
        cout<< "Total Cost Is :"<<totalcost<<endl;
        cout<< "Please deposite 25% deposite to reserve the event"<<endl;
        cout<< "The deposite Needed is :"<<deposite<<endl;
    }
};
int main()
{
    event e1;
    e1.insertdata();
    e1.show();
}
