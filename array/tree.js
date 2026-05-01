class Node {
    constructor(val) {
        this.left = null;
        this.val = val;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let node = new Node(val);
        if (this.root == null) {
            this.root = node;
            return;
        }
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (currentNode.left == null) {
                currentNode.left = node;
                return;
            } else {
                queue.push(currentNode.left)
            }
            if (currentNode.right == null) {
                currentNode.right = node;
                return;
            } else {
                queue.push(currentNode.right)
            }
        }
    }
    inorder(parent) {
        if (parent == null) {
            return;
        }
        this.inorder(parent.left)
        console.log(parent.val)
        this.inorder(parent.right)
    }
    update(oldValue, newValue) {
        if (this.root == null) {
            return false
        }
        let queue = []
        queue.push(this.root)
        while (queue.length > 0) {
            let currentNode = queue.shift()
            if (currentNode.val == oldValue) {
                currentNode.val = newValue
                return true
            }
            if (currentNode.left != null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right != null) {
                queue.push(currentNode.right)
            }
        }
        return false
    }
}
let tree = new BinaryTree()
tree.insert(1);
 tree.insert(2);
tree.insert(3);
 tree.update(3,6)
tree.inorder(tree.root)