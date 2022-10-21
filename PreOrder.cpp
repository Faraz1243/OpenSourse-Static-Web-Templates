#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} *root;

void preOrder(struct Node *root) {
    if(root != NULL) {
        cout << root -> data << " ";
        preOrder(root -> left);
        preOrder(root -> right);
    }
}
//This file is meant to be deleted
