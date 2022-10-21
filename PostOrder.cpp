struct Node {
    int data;
    struct Node *left;
    struct Node *right;
}

void postOrder(struct Node *root) {
    if(root != NULL) {
        postOrder(root -> left);
        postOrder(root -> right);
        cout << root -> data << " ";
    }
}
//This file is meaant to be deleted
