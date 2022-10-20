#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} *root;

void postOrder(struct Node *root) {
    if(root != NULL) {
        postOrder(root -> left);
        postOrder(root -> right);
        cout << root -> data << " ";
    }
}
