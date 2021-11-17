#include <cstdlib>
#include <iostream>

#include "Person.h"
using namespace std;

/*
 * Getters and setters are methods for getting
 * and setting values in a class
 * 
 */
int main(int argc, char** argv) {
    Person person; //name= george
    cout << person.toString() << endl;
    person.setName("Anurag"); //name set to Anurag
    cout << person.toString() << endl;
    cout << "Name with get method: " << person.getName() << endl;
    return 0;
}

