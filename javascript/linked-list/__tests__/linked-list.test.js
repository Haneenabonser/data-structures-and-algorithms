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
});
