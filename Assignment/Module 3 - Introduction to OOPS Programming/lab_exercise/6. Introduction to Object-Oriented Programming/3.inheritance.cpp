#include<iostream>
using namespace std;
class person
{
public:
    int a;
    string name;
    void setdata(int a,string name)
    {
        this->a=a;
        this->name=name;
    }
    void display()
    {
        cout<< "name :"<<name<<endl;
        cout<< "age :"<<a<<endl;
    }
};
class student : public person
{

};
class teacher : public person
{

};
int main()
{
    student s1;
    s1.setdata(19,"ram");
    s1.display();
    teacher t1;
    t1.setdata(99, "jay");
    t1.display();
}
