// Helper function (do not edit)
function Node(val) {
  const obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// Find the intersection of two lists in O(n)
function linkedListIntersection(list1, list2) {
  const items = {};
  for (let node1 = list1; node1 !== null; node1 = node1.next) {
    items[node1.value] = true;
  }
  for (let node2 = list2; node2 !== null; node2 = node2.next) {
    if (items[node2.value]) {
      return node2.value;
    }
  }
  return null;
}

module.exports = { Node, linkedListIntersection };
