class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(element) {
        let node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }

            prev.next = node;
        }

        this.size++;
    }

    prepend(element) {
        let node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
        }

        this.size++;
    }

    insertAt(element, location) {
        let node = new Node(element);
        if (location < 0 || location > this.sizeOfList()) {
            return false;
        }
        if (this.isEmpty() && location != 0) {
            return false;
        }
        if (location === 0) {
            this.prepend(element);
        }
        else {
            let i = 1;
            let prev = this.head;

            while (prev.next) {
                if (i === location) {
                    let next = prev.next;
                    prev.next = node;
                    node.next = next;
                    this.size++;
                    break;
                }
                else {
                    prev = prev.next;
                }

                i++;
            }
            this.size++;
        }
    }

    removeElement(element) {
        let prev = this.head;
        if (prev.value === element) {
            this.head = prev.next;
            this.size--;
            return true;
        }
        else {
            while (prev.next) {
                if (prev.next.value === element) {
                    let next = prev.next.next;
                    prev.next = next
                    this.size--;
                    return true;
                }
                else {
                    prev = prev.next;
                }
            }
            return false;
        }
    }

    removeFrom(location) {
        if (this.sizeOfList() < location || location < 0) {
            return false;
        }

        if (location === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let i = 1;
        let prev = this.head;

        while (prev.next) {
            if (i === location) {
                let next = prev.next.next;
                prev.next = next
                this.size--;
                return true;
            }
            else {
                prev = prev.next;
            }

            i++;
        }
        return false;
    }

    indexOf(element) {
        let i = 0;

        let prev = this.head;

        while (prev.next) {
            if (prev.value === element) {
                return i;
            }
            else {
                prev = prev.next
            }
            i++;
        }
        return false;
    }

    isEmpty() {
        return this.sizeOfList() === 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        if (this.isEmpty()) {
            return 'List is empty'
        }
        let root = this.head;
        let str = '';
        while (root.next) {
            str += root.value + ' -> ';
            root = root.next;
        }
        str += root.value;
        return str;
    }
}

let ll = new LinkedList();
console.log('Insert 1 at location 0');
ll.insertAt(1, 0);
console.log('Print the list : ', ll.printList());

console.log('Insert 5');
ll.append(5);
console.log('Print the list : ', ll.printList());

console.log('Insert 10');
ll.append(10);
console.log('Print the list : ', ll.printList());

console.log('Insert 15');
ll.append(15);
console.log('Print the list : ', ll.printList());

console.log('Prepend 0');
ll.prepend(0);
console.log('Print the list : ', ll.printList());

console.log('Insert 20');
ll.append(20);
console.log('Print the list : ', ll.printList());

console.log('Insert 17 at location 3');
ll.insertAt(17, 3);
console.log('Print the list : ', ll.printList());

console.log('Insert 99 at location 0');
ll.insertAt(99, 0);
console.log('Print the list : ', ll.printList());

console.log('Insert 12 at location 22');
ll.insertAt(12, 22);
console.log('Print the list : ', ll.printList());

console.log('Remove element 17');
ll.removeElement(17);
console.log('Print the list : ', ll.printList());

console.log('Index of element 10 is : ', ll.indexOf(10));

console.log('Remove element 1');
ll.removeElement(1);
console.log('Print the list : ', ll.printList());

console.log('Remove from location 2');
ll.removeFrom(2);
console.log('Print the list : ', ll.printList());

console.log('Remove from location 0');
ll.removeFrom(0);
console.log('Print the list : ', ll.printList());