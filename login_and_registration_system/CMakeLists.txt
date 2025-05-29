cmake_minimum_required(VERSION 3.27)
project(login_and_registration_system)

set(CMAKE_CXX_STANDARD 17)

add_executable(login_and_registration_system main.cpp
        useful.cpp
        register.h
        register.cpp)
