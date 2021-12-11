// Helper function (do not edit)
function Node(val) {
  const obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// Find the intersection of two lists in O(n^2)
function linkedListIntersection(list1, list2) {
  for (let node1 = list1; node1 !== null; node1 = node1.next) {
    for (let node2 = list2; node2 !== null; node2 = node2.next) {
      if (node2.value === node1.value) {
        return node1.value;
      }
    }
  }
  return null;
}

module.exports = { Node, linkedListIntersection };
