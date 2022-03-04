// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    size(){
        let counter = 0;
        let node = this.head

        while(node){
            counter++;
            node = node.next
        }
        return counter
    }
    
    getFirst(){
        return this.head
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let node = this.head
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next
        }
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        
        this.head = this.head.next;
        
    }

    removeLast(){
        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;
        while(node.next){
            prev = node;
            node = node.next;
        }
        prev.next = null;

    }

    insertLast(data){
        const last = this.getLast()
        const node = new Node(data);

        if(last){
            //There are some existing nodes in our chain
            last.next = node;
        }else{
            // the chain is empty
            this.head = node;
        }
    }

    getAt(index){
        if(!this.head){
            return null
        }

        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null
    }

    removeAt(index){
        if(!this.head){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1)
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;

        //my solution
        // let prev = this.head;
        // let node = this.head.next;

        // let counter = 0;
        // while(node){
        //     if(index === 0){
        //         this.head = this.head.next;
        //         return;
        //     }
        //     if(counter === index){
        //         prev.next = node.next;
        //         return;
        //     }
        //     counter++
        // }
        // return;
    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index === 0){
            this.head = new Node(data, this.head)
            return;
        }

        const previous = this.getAt(index -1) || this.getLast();
        const node = new Node(data, previous.next)
        previous.next = node
    }
}


module.exports = { Node, LinkedList };
