#include<iostream>  //cerr,cin,cout
#include<sstream>   //how to make a stream that reads out of a string
#include<string>
using namespace std;
int main()
{
    string line;
    double x,y,z;
    while(!cin.eof())
    {
        getline(cin,line);
        istringstream thisline(line);
        thisline >>x>>y>>z;
        cout<<x<<","<<y<<","<<z<<"\n";
    }
    return 0;
}

