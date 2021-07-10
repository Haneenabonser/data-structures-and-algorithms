## Singly Linked List
- Is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail).

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Create a Linked List class.

## Approach & Efficiency
- time => O(n)
- space => O(1)

## API
- The class should contain the following methods:
- insert
    - Arguments: value
    - Returns: nothing
    - Adds a new node with that value to the head of the list with an O(1) Time performance.
- includes
    - Arguments: value
    - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.
- to string
    - Arguments: none
    - Returns: a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"