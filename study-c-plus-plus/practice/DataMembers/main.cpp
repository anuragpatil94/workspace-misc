#include <cstdlib>
#include <iostream>
#include "Cat.h"
using namespace std;

/*
 * 
 */
int main(int argc, char** argv) {
    //Usually prevent this from happening
    //don't let people set values to dataMembers or class variables form outside 
    //of the class, rather encapsulate that functionality so that only objects 
    //can access those variables.
    //
    Cat jack;
    jack.makehappy();
    jack.speak();

    Cat jim;
    jim.makeSad();
    jim.speak();

    return 0;
}

