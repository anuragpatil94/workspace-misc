#include<iostream>
#include<cstdint> //for portability in different OS
using namespace std;

//Global Variables
int x;

int main()
{

    float f=1.5f; //accurate up to 7 digits
    double d=1.5; //accurate up to 15 digits
    long double e=1.5000000000000000000000000000000000000L; // accurate upto 30 digits //depends on platform
    double Na=6.022e+23;  //exponential notation
    cout<<"long double: "<<e<<"  "<< sizeof(e)<<endl;

    double d1=1+1.5;  // type promotion 1 --> double (1.0)
    double d2= 3/2;   // not 1.5, First compute 3/2=1 then double it as 1.0
    double d3=1.5f*3; // promote 3 to float (3.0f)  then to double

    cout<<d1<<"\n"<<d2<<"\n"<<d3;
}
