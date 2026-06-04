class Node{
    constructor(data) {
        this.data = data
        this.next=null
    }
    add() {
        return 2+3
    }
}
let obj = new Node(1)
console.log(obj)
console.log(obj.add());

class Intro{
    constructor(name) {
        console.log(`${name}`)
        this.Name=name
    }
    updateName(Newname) {
       this.Name=Newname
    }
    mySelf() {
        console.log(`My name is ${this.Name}`);
    }
}
let user = new Intro("shantanu")
console.log(user)
user.mySelf()
user.updateName("Golu")
user.mySelf();