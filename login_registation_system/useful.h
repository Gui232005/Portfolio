#ifndef LOGIN_REGISTRATION_SYSTEM_USEFUL_H
#define LOGIN_REGISTRATION_SYSTEM_USEFUL_H

#include <iostream>

using namespace std;

class useful {
public:
    int randomNumber(){
        int random;
        srand(time(0));
        random = rand();
        cout << "Random number > " << random << endl;
        return random;
    }
};

#endif //LOGIN_REGISTRATION_SYSTEM_USEFUL_H