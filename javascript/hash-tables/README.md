# Hashtables
A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.          

## Challenge
- Implement a Hashtable Class with the following methods:

- add
    - Arguments: key, value
    - Returns: nothing

- get
    - Arguments: key
    - Returns: Value associated with that key in the table.

- contains
    - Arguments: key
    - Returns: Boolean, indicating if the key exists in the table already.

- hash
    - Arguments: key
    - Returns: Index in the collection for that key.
                          
## Approach & Efficiency
- Time complexity: O(n)
- Space: O(n)

## API
- Add(): When adding a new key/value pair to a hashtable.
- Find(): The Find takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.
- Contains(): The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.
- GetHash(): The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.