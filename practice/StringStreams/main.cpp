#include <cstdlib>
#include<iostream>
#include<sstream>
using namespace std;

/*
 * string streams - concatenate different types of data into a string
 */
int main(int argc, char** argv) {
    int age = 20;
    string name = "Jack Sparrow";
    //sstream is used to concatenate different data types
    stringstream ss;
    ss << "Name: ";
    ss << name;
    ss << "; Age: ";
    ss << age;
    //Concatenated using stringstream into a single string info
    string info=ss.str();
    
    cout << info << endl;
    return 0;
}

