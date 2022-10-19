#include <bits/stdc++.h>
using namespace std;

struct Node {
    char ch;
    struct Node *left, *right;
};
Node* createNewNode(char ch)
{
    Node *temp = new Node;
    temp->value = ch;
    temp->left = temp->right = NULL;
    return temp;
}

void postOrder(struct Node *node)
{
    if (node == NULL)
        return;

    //Postorder: Left->Right->Root
    postOrder(node->left);
    postOrder(node->right);
    cout << node->value << " ";
}
 
int main()
{
    struct Node *root = createNewNode('A');
    root->left = createNewNode('B');
    root->right = createNewNode('C');
    root->left->left = createNewNode('D');
    root->left->right = createNewNode('E');
    cout << "\nPostorder traversal of binary tree is \n";
    postOrder(root);
 
    return 0;
}