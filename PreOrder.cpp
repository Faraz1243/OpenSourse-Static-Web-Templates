#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} *root;

void preOrder(struct Node *root) {
    cout << root -> data << " ";
    preOrder(root -> left);
    preOrder(root -> right);
}
