'use strict';

// Require our linked list implementation
const LinkedList = require('../index').LinkedList;
const zipLists = require('../index').zipLists;

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Zip linked lists',()=>{
    const listA = new LinkedList();
    const listB = new LinkedList();
    for(let i=0;i<5;i++){
      listA.append(i);
    }
    for(let i=0;i<5;i++){
      listA.append(i+10);
    }
    expect(zipLists(listA,listB)).toBe('{0} -> {1} -> {2} -> {3} -> {4} -> {10} -> {11} -> {12} -> {13} -> {14}');
  })

});