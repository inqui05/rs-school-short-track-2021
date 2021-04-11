/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let currentNode = Object.assign(l);

  if (currentNode.value === k && currentNode.next !== null) {
    currentNode = currentNode.next;
  } else if (currentNode.value === k && currentNode.next === null) {
    currentNode = null;
  }
  if (currentNode.next !== null) {
    currentNode.next = removeKFromList(currentNode.next, k);
  }
  return currentNode;
}

module.exports = removeKFromList;
