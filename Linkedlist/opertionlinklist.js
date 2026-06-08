class Node{
    constructor(data) {
        this.data = data
        this.next=null
    }
}
class SinglyLinkedList{
    constructor() {
        this.head=null
    }
    append(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
            return
        }
        let temp = this.head
        while (temp.next != null) {
            temp=temp.next
        }
        temp.next=node
    }
    Atposition(data) {
        let node = new Node(data)
        if (position <= 1) {
            this.prepend(data)
            return
        }
        let count = 1
        let temp = this.head
        while (this.head != null && count < position - 1) {
            temp = temp.next
            count++
        }
    }
}

let list = new SinglyLinkedList()
list.append(1)
list.append(2);
console.log(list)