import DoubleLinkedList from "./components/DoubleLinkedList.js";

const list = new DoubleLinkedList();
list.createFromArray([1, 2, 3, 4, 5, 6]);
list.append(9);
list.prepend(9);
list.removeAt(3);
list.indexOf(3);
list.insertAt(2, 9);
list.insertAtEnd(2, 9);
list.toArray();

list.each((it) => console.log(it));
list.eachReversed((it) => console.log(it));
