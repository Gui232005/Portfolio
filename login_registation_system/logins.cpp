#include "logins.h"


void Login::desincryptPassword() {
    for (char &c : password) {
        c -= 3; // Shift each character back by 3
    }
}

void Login::encryptPassword() {
    for (char &c : password) {
        c += 3; // Shift each character by 3
    }
}

bool Login::checkLogin(std::string e, std::string p) {}

void  Login::forgetPassword(std::string e) {
    string codification;
    useful *u = nullptr;
    int code = u->randomNumber();
    cout << "Insert a code you received:  ";
    cin >> codification;

    int comparation = stoi(codification);

    if ( comparation == code){
        cout << "Code is correct, you can change your password." << endl;
        cout << "Insert your new password: ";
        cin >> this->password;
        //encryptPassword();
    } else {
        cout << "Code is incorrect, try again." << endl;
    }
}