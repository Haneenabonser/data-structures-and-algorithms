'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toTruthy();
  });
  it('instantiate an empty linked list', () => {
    const list = new LinkedList();
  });
  it('insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(6);
    expect(list.head.value).toEqual(6);
  });
  it('Head Property', () => {
    const list = new LinkedList();
    list.insert(9);
    list.insert(7);
    expect(list.head.value).toEqual(7);
    expect(list.head.next.value).toEqual(9);
  });
  it('insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });
  it('return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(3)).to(true);
    expect(list.includes(1)).to(true);
    expect(list.includes(7)).to(false);
  });
  it('return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(false);
    list.insert(6);
    list.insert(7);
    expect(list.toString()).to('{7} -> {6} -> {false} -> {5}');
  });
  it('add a node to the end ', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.next.value).toEqual(2);
  });

  it('add multiple nodes ', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head.next.next.next.value).toEqual(4);
  });
  it('insert a node before a node located i the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore('messi', 3);
    expect(list.head.next.next.value).toBe('messi');
  })
  it('insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore('messi', 1);

    expect(list.head.value).to('messi');
  })
  it('insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter('messi', 3);
    expect(list.head.next.next.next.value).toBe('messi');
  })
  it('insert a node after the last node of the linked list', () => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter('messi', 4);

    expect(list.head.next.next.next.next.value).toEqual('messi');
  })
});
