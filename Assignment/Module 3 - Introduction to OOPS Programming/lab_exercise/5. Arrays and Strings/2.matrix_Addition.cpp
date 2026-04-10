#include<iostream>
using namespace std;
int main()
{
    int sum=0;
    int arr[2][2]={{10,20},{40,50}};
    int rows=sizeof(arr)/sizeof(arr[0]);
    int column=sizeof(arr[0])/sizeof(arr[0][0]);
    for(int i=0;i<rows;i++)
    {
        for(int j=0;j<column;j++)
        {
            sum=sum+arr[i][j];
        }
    }
    cout<<sum;

}
