class Queue {
  constructor() {
    this.queue = [];
    }
    enqueue(data) {
       return this.queue.push(data)
    }
    isEmpty() {
        if (this.queue.length == 0) {
            return true
        } else {
            return false
        }
    }
    deque() {
        if (this.isEmpty()) {
            console.log("queue is empty")
            return
        }
        return this.queue.shift()
    }
    peek() {
        if (this.isEmpty()) {
          console.log("queue is empty");
        }
        return this.queue[0]
    }
    clear() {
        this.queue=[]
    }
    size() {
        return this.queue.length
    }
}
let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue)
queue.deque();
console.log(queue);
console.log(queue.size())
console.log(`this is for peek ${queue.peek()}`);
console.log(queue.isEmpty());
console.log(queue.clear());
console.log(queue);