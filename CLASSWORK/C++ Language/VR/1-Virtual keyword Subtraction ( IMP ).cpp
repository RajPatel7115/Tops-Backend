#include<iostream>
using namespace std;

// Abstract base class with a pure virtual function
class Shape {
public:
    virtual void draw() = 0;
};

// Derived class
class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a Circle" << endl;
    }
};

// Another derived class
class Rectangle : public Shape {
public:
    void draw() override {
        cout << "Drawing a Rectangle" << endl;
    }
};

int main() {
    // You cannot instantiate Shape, as it is an abstract class.
    // Shape s; // This will cause a compilation error.

    Shape* shape1 = new Circle();
    Shape* shape2 = new Rectangle();

    // The correct derived-class function is called at runtime.
    shape1->draw(); // Prints "Drawing a Circle"
    shape2->draw(); // Prints "Drawing a Rectangle"


    return 0;
}
