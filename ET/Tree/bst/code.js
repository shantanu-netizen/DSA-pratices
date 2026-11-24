class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
class bst {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val);
    if (this.root == null) {
      this.root = node;
      return;
    }
    let cNode = this.root;
    while (true) {
      if (val == cNode.val) {
        return;
      }
      if (val < cNode.val) {
        if (cNode.left == null) {
          cNode.left = node;
          return;
        }
        cNode = cNode.left;
      }
      if (val > cNode.val) {
        if (cNode.right == null) {
          cNode.right = node;
          return;
        }
      }
      cNode = cNode.right;
    }
  }
  inorder(parent) {
    if (parent == null) {
      return;
    }
    this.inorder(parent.left);
    console.log(parent.val);
    this.inorder(parent.right);
    }
    search(val) {
        if (cNode == null) {
            console.log("tree is empty")
        }
        let cNode = this.root
        while (cNode != null) {
            if (cNode.val == val) {
                console.log("true")
                return
            }
            if (val < cNode.val) {
              cNode = cNode.left;
            }
            if (val > cNode.val) {
              cNode = cNode.right;
            }
        }
        console.log("value not found")
    }
}
let tree = new bst();
tree.insert(10);
tree.insert(2);
tree.insert(17);
tree.insert(14);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.inorder(tree.root);