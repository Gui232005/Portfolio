//
// Created by guisi on 18/08/2025.
//

#include "menu.h"
#include <iostream>

using namespace std;

int Menu::showMenu() {
    int answer;
    cout << "Welcome to the LeetCode Menu!" << "   " << "All the problems you can see here are solved" << endl;
    cout << "1. Problem 1" << endl;
    cout << "0. Exit" << endl;
    cout << "Please select an option: ";
    cin >> answer;
    return answer;
}