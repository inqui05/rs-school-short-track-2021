/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.size = 0;
    this.repository = {};
  }

  push(element) {
    this.size++;
    this.repository[this.size] = element;
  }

  pop() {
    const position = this.size;
    const removedData = this.repository[position];
    delete this.repository[position];
    this.size--;

    return removedData;
  }

  peek() {
    return this.repository[this.size];
  }
}

module.exports = Stack;
