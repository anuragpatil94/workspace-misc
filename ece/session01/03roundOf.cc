#include<iostream>
#include<cstdint> //for portability in different OS
using namespace std;



int main()
{
    cout<<"float: "<<sizeof(float)<<endl;
    cout<<"double: "<<sizeof(double)<<endl;
    float x;
    for(x=0.0; x<=10.0f; x += .1f)

    {
        cout<<x<<' '; //random number will mess with answer for some steps
    }
    cout<<'\n';
    /*

    */

    for(x=0.0; x<=1000.0f; x += .1f)
    {
        cout<<x<<' '; //random number will mess with answer for some steps
    }
    cout<<'\n';
}

