#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} *root;

void postOrder(struct Node *root) {
    postOrder(root -> left);
    postOrder(root -> right);
    cout << root -> data << " ";
}
