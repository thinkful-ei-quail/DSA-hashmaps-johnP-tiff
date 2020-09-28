
class _Node {
  constructor(value, next) {
    this.value=value;
    this.next=next;
  }
}

class _Double_Node {
  constructor(value, next, last) {
    this.last=last;
    this.value=value;
    this.next=next;
  }
}


class DLL {
  constructor() {
    this.head=null;
    this.length=0;
  }
  insertFirst(item) {
    this.head=new _Double_Node(item, this.head, null);
    this.length+=1;
  }
  insertLast(item) {
    if(this.head===null) {
      this.insertFirst(item);
    } else {
      let tempNode=this.head;
      while(tempNode.next!==null) {
        tempNode=tempNode.next;
      }
      tempNode.next=new _Double_Node(item, null, tempNode);
      this.length+=1;
    }
  }
  find(item) {
    let currNode=this.head;
    if(!this.head) {
      return null;
    }
    while(currNode.value!==item) {
      if(currNode.next===null) {
        return null;
      } else {
        currNode=currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if(!this.head) {
      return null;
    }

    if(this.head.value===item) {
      this.head=this.head.next;
      return;
    }
    let currNode=this.head;
    let previousNode=this.head;
    while((currNode!==null)&&(currNode.value!==item)) {
      previousNode=currNode;
      currNode=currNode.next;
    }
    if(currNode===null) {
      console.log('Item not found');
      return;
    }
    console.log(currNode.value)

    if(currNode.next) {
      currNode.next.last=previousNode;
      previousNode.next=currNode.next;
    }
    this.length-=1;
  }
  insertBefore(item, key) {
    if(!key) {
      console.log('Need valid key');
      return;
    }
    let keyNode=this.find(key);
    if(!keyNode) {
      console.log('Key does not exist');
      return;
    }
    ;
    // insert new node
    let tempNode=new _Double_Node(item, keyNode, keyNode.last)
    keyNode.last.next=tempNode;
    keyNode.last=tempNode;
    this.length+=1;
  }
  insertAfter(item, key) {
    if(!key) {
      console.log('Need valid key');
      return;
    }
    let keyNode=this.find(key);
    if(!keyNode) {
      console.log('Key does not exist');
      return;
    }

    let tempNode=new _Double_Node(item, keyNode.next, keyNode)
    keyNode.next=tempNode;
    keyNode.next.next.last=tempNode;
    this.length+=1;
  }
  insertAt(item, pos) {
    if(pos===this.length+1) {
      this.insertLast(item);
    } else if(pos>this.length+1||pos<0) {
      console.log('Invalid position');
    } else {
      let currHead=this.head;
      for(let i=0;i<pos-1;i++) {
        currHead=currHead.next;
      }
      this.insertBefore(item, currHead.value);
    }
  }
  display() {
    // let list = {};
    // let currHead = this.head;
    // while (currHead !== null) {
    //   list[`${currHead.value}`] = currHead.next, currHead.last;
    //   currHead = currHead.next;
    // }
    // return list;
    let list=[];
    let currHead=this.head;
    while(currHead!==null) {
      list.push(currHead.value);
      currHead=currHead.next;
    }
    return list;
  }

  isEmpty() {
    if(this.head) {
      return true;
    }
    return false;
  }

  findLast() {
    if(!this.isEmpty()) {
      return null;
    }
    let currNode=this.head;
    while(currNode.next!==null) {
      currNode=currNode.next
    }
    return currNode;
  }

  reverse() {
    let list=this.display();
    let length=list.length;
    for(let i=0;i<=length;i++) {
      let diff=length-i;
      this.remove(list[i])
      this.insertLast(list[diff])
    }
  }
}

// function mainDLL() {
//   let DBL=new DLL();
//   DBL.insertLast('Aquaria');
//   DBL.insertLast('Caprica');
//   DBL.insertLast('Castratikron');
//   DBL.insertLast('Gemenon');
//   DBL.insertLast('Picon');
//   DBL.insertLast('Sagittaron');
//   DBL.insertLast('Tauron');

//   console.log(DBL.display());
//   DBL.reverse();
//   console.log(DBL.display());

// }
// mainDLL();

module.exports=class LinkedList {
  constructor() {
    this.head=null;
    this.length=0;
  }
  insertFirst(item) {
    this.head=new _Node(item, this.head);
    this.length+=1;
  }
  insertLast(item) {
    if(this.head===null) {
      this.insertFirst(item);
    } else {
      let tempNode=this.head;
      while(tempNode.next!==null) {
        tempNode=tempNode.next;
      }
      tempNode.next=new _Node(item, null);
      this.length+=1;
    }
  }
  find(item) {
    let currNode=this.head;
    if(!this.head) {
      return null;
    }
    while(currNode.value!==item) {
      if(currNode.next===null) {
        return null;
      } else {
        currNode=currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if(!this.head) {
      return null;
    }
    if(this.head.value===item) {
      this.head=this.head.next;
      next;
    }
    let currNode=this.head;
    let previousNode=this.head;
    while((currNode!==null)&&(currNode.value!==item)) {
      previousNode=currNode;
      currNode=currNode.next;
    }
    if(currNode===null) {
      console.log('Item not found');
      return;
    }
    previousNode.next=currNode.next;
    this.length-=1;
  }
  insertBefore(item, key) {
    if(!key) {
      console.log('Need valid key');
      return;
    }
    let keyNode=this.find(key);
    if(!keyNode) {
      console.log('Key does not exist');
      return;
    }
    let tempNode=new _Node(item, keyNode);
    let currNode=this.head;
    let previousNode=this.head;
    // get first half of list before node
    while(currNode!==keyNode) {
      previousNode=currNode;
      currNode=currNode.next;
    }
    // insert new node
    previousNode.next=tempNode;
    currNode=tempNode;
    this.length+=1;
  }
  insertAfter(item, key) {
    if(!key) {
      console.log('Need valid key');
      return;
    }
    let keyNode=this.find(key);
    if(!keyNode) {
      console.log('Key does not exist');
      return;
    }

    let tempNode=new _Node(item, keyNode.next)
    keyNode.next=tempNode;
    this.length+=1;
  }
  insertAt(item, pos) {
    if(pos===this.length+1) {
      this.insertLast(item);
    } else if(pos>this.length+1||pos<0) {
      console.log('Invalid position');
    } else {
      let currHead=this.head;
      for(let i=0;i<pos-1;i++) {
        currHead=currHead.next;
      }
      this.insertBefore(item, currHead.value);
    }
  }
  display() {
    let list=[];
    let currHead=this.head;
    while(currHead!==null) {
      list.push(currHead.value);
      currHead=currHead.next;
    }
    return list;
  }

  size() {
    return this.display().length;
  }

  isEmpty() {
    if(this.head) {
      return true;
    }
    return false;
  }

  findPrevious(item) {
    if(!this.head) {
      return null;
    }
    if(!this.find(item)) {console.log('Node not in List'); return null;}
    let currNode=this.head;
    if(currNode.value===item) {console.log('Cannot findPrevious on first node'); return null}
    while(currNode.next.value!==item) {
      if(currNode.next===null) {
        return null;
      } else {
        currNode=currNode.next;
      }
    }
    return currNode
  }
  findLast() {
    if(!this.isEmpty()) {
      return null;
    }
    let currNode=this.head;
    while(currNode.next!==null) {
      currNode=currNode.next
    }
    return currNode;
  }
  reverse() {
    let currNode=this.head;
    let firstVal=this.head.value;
    while(currNode.next) {
      this.insertFirst(currNode.value);
      currNode=currNode.next;
    }
    this.insertFirst(this.findLast().value);
    this.find(firstVal).next=null;
  }

  findThirdToLast() {
    let currNode=this.head;
    while(currNode.next.next.next) {
      currNode=currNode.next;
    }
    return currNode.value;
  }

  findMid() {
    let currNode=this.head;
    let midPoint=this.size()/2
    for(let i=0;i<=midPoint-1;i++) {
      currNode=currNode.next
    }
    if(this.size()%2===0) {
      return [currNode.value, currNode.next.value]

    }
    return [currNode.value];

  }

  hasCycle() {
    // Next line is to create a simple list that cycles.
    //this.findLast().next = this.head;
    let slow=this.head;
    let fast=this.head;
    while(fast&&fast.next) {
      slow=slow.next;
      fast=fast.next.next;
      if(slow===fast) {
        return true;
      }
    }
    return false;
  }
}

function main() {
  // let SLL=new LinkedList();
  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');//item not found
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // console.log(SLL.find('Kat'));
  // console.log(SLL.size());
  // console.log(SLL.display());
  // console.log(SLL.isEmpty());
  // console.log(SLL.findPrevious('Apo'))
  // console.log(SLL.findLast());
  // SLL.reverse();
  // console.log(SLL.display());
  // console.log(SLL.isEmpty());
  // console.log(SLL.findPrevious('Apo'));
  // console.log(SLL.findLast());
  // console.log(SLL.findThirdToLast());
  // console.log(SLL.findMid());

  // console.log(SLL.hasCycle());
}

//main();


/*
  Problem 4. Mystery program.
  Answer:
    It deletes duplicate values from the list.
*/
