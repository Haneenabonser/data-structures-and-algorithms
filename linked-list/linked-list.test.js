'use strict';

const LinkedList = require('./linked-list');

describe('Linked List', () => {
  it('instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
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
    expect(list.includes(3)).toBe(true);
    expect(list.includes(1)).toBe(true);
    expect(list.includes(7)).toBe(false);
  });
  it('return false when searching for a value in the linked list that does not exist',()=>{
    let list = new LinkedList();
    list.insert(5);
    list.insert(false);
    list.insert(6);
    list.insert(7);
    expect(list.toString()).toBe('{7} -> {6} -> {false} -> {5}');
  });

});