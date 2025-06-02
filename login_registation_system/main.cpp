#include <iostream>

#include "person.h"
#include "logins.h"

using namespace std;

int main() {
    Login *l = nullptr;
    l->forgetPassword("gui");
    return 0;
}
