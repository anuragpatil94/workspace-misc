
#include <cstdlib>
#include<iostream>

#include "Cat.h"
using namespace std;

/*
 * Constructor- runs when object is instantiated
 * 
 * Destructor- when a object is destroyed 
 * destructor is called automatically
 * 
 */
int main(int argc, char** argv) {
    cout << "Starting the Code" << endl;

    //instantiating a Cat object from a class
    //The constructors runs as soon as the object is created
    //In this case when object bob is created, constructor executes.
    //does not require a special call
    {
        Cat bob;
        bob.speak();
    }//Normally not used but, sometimes done to specifically de-allocate memory
    //Cat bob is destroyed at the nearest closing brackets 
    /* OUTPUT for 
     * {
        Cat bob;
        bob.speak();
        }
     * ------------------
     * Starting the Code
        Cat created.
        Meow!!
        Cat destroyed.
        Ending the Code
     */
    cout << "Ending the Code" << endl;
    return 0;
    //Cat bob is destroyed at this point if there were no above enclosing brackets
    /* OUTPUT for:
     *   
     * Cat bob;
       bob.speak();
     * 
     * ---------------------
     * Starting the Code
        Cat created.
        Meow!!
        Ending the Code
        Cat destroyed
     */
}

