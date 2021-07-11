'use strict';

const LinkedList = require('../index');

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

 // code-chalistenge 06
  it(' Add a node to the end ',()=>{
    const list = new LinkedList();

    list.append(1);
    list.append(2);

    expect(list.head.next.value).toEqual(2);
  });

  it('Add multiple nodes ',()=>{
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.head.next.next.next.value).toEqual(4);
  });
  it('Insert in the middle',()=>{
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(5,3);

    expect(list.head.next.next.value).toEqual(5);
  })
  it('Insert before first',()=>{
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(5,1);

    expect(list.head.value).toEqual(5);
  })
  it('Insert after a value',()=>{
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter(5,3);

    expect(list.head.next.next.value).toEqual(5);
  })
  it('Insert after last',()=>{
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter(5,4);

    expect(list.head.next.next.next.value).toEqual(5);
  })


// code chalistenge07 

describe('Kth from end', () => {

    it('k is greater than the length of the linked list',()=>{
      const list = new LinkedList();
  
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
  
      expect(list.kthFromEnd(12)).toBe("Index provided is greater than the elements count");
    })
    it('k and the length are the same',()=>{
      const list = new LinkedList();
  
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
  
      expect(list.kthFromEnd(4)).toBe("Index provided is greater than the elements count");
    })

    it('K is a negative integer',()=>{
      const list = new LinkedList();
  
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
  
      expect(list.kthFromEnd(-6)).toBe("negative index doesn't exist");
    })

    it('kth from the end',()=>{
      const list = new LinkedList();

      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
  
      expect(list.kthFromEnd(2)).toEqual(2);
   
    })
  });

});