const { linkedListIntersection, Node } = require('./index');

describe('Test the implementation of linked list intersection', () => {
  it('should return the first node at which the intersection of two linked lists begins', () => {
    const f = Node('F');
    const e = Node('E');
    e.next = f;
    const d = Node('D');
    d.next = e;

    const c = Node('C');
    c.next = d;
    const b = Node('B');
    b.next = c;
    const list1 = Node('A');
    list1.next = b;

    const y = Node('Y');
    y.next = d;
    const list2 = Node('X');
    list2.next = y;

    expect(linkedListIntersection(list1, list2)).toBe('D');
  });

  it('should return null if there is no point of intersection between two linked lists', () => {
    const d = Node('D');
    const c = Node('C');
    c.next = d;
    const b = Node('B');
    b.next = c;
    const list1 = Node('A');
    list1.next = b;

    const z = Node('Z');
    const y = Node('Y');
    y.next = z;
    const list2 = Node('X');
    list2.next = y;
    expect(linkedListIntersection(list1, list2)).toBe(null);
  });
});
