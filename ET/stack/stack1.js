class Stack {
    constructor() {
        this.stack = []
    }
    push(data) {
        this.stack.push(data)
    }
    isEmpty() {
        if (this.stack.length == 0) {
            return true
        } else {
            return false
        }
    }
    pop() {
        if (this.isEmpty()) {
            console.log("this stack is empty")
            return
        } else {
            this.stack.pop()
        }
    }
    peek() {
        if (this.isEmpty()) {
            console.log("this stack is empty")
            return
        } else {
             return this.stack[this.stack.length-1]
        }
    }
    size() {
        return this.stack.length
    }
    clear() {
        return this.stack=[]
    }
}
let stack = new Stack()
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5)
stack.push(6)
stack.push(7);
stack.push(8);
console.log(stack)
console.log(stack.isEmpty());
stack.pop();
console.log(stack);
console.log(stack.peek());
console.log(stack.size());
//console.log(stack.clear());
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++){
    stack.push(arr[i])
}
console.log(arr)
