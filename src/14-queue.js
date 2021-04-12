const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.count = 0;
    this.last = null;
    this.node = null;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.count === 0) {
      this.node = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.count++;
  }

  dequeue() {
    const removedData = this.node;
    this.node = this.node.next;
    this.count--;
    return removedData.value;
  }
}

module.exports = Queue;
