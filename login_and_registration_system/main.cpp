#include "useful.h"
#include "register.h"

#include <iostream>

/*Here only use tables person and login*/

using namespace std;

int main() {
    string option;
    useful * U = new useful();
    cout << "===Welcome to login as registration system===" << endl;
    cout << "> Register " << endl;
    cout << "> Login " << endl << endl;
    cout << ">>> "; //insert a string you want to use
    cin >> option;

    option = U->toLowerString(option);


    if(option == "register")
        cout << "You going to register functions" << endl;
    else cout << "You going to login functions" << endl;

    return 0;
}
