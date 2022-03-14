# Hash Tables
The **average time** complexity of `insert`,  `delete`, `search` is `O(1)`.

## Direct-address Tables
Assume all elements have key drawn from the set `U = {0, 1, ..., M-1}`, we can use an array `T` of size M to store these elements, element with key k is stored in slot k.

- Pros
	- `insert`, `delete`, `search` are `O(1)` in worst case.
- Cons
	- Creating an array of size M is impractical if M is extremely large.
	- The number of elements stored in the array may be small relative to M that most of the memory allocated would be wasted.

## Hash Tables
Hash tables store element with key k in slot `h(k)` instead of k. We call `h` a hash function which maps the key set `U` to `{0, 1, ..., M-1}`, where M is typically much smaller than the size of `U`.

- Pros
	- `Insert`, `delete`, `search` are `O(1)` on average.
	- Requires less memory, and less memory would be wasted.
- Cons
	- Collision is inevitable due to the nature of hash function: Hash function is surjective, more than one key have the same hash value.
	- Bad hash function may lead to `O(N)` worst case.

We can solve these two problems by:
1. Providing a hash function that can uniformly distribute the input across all possible output, so that collision can be minimized.
2. Handling collision properly, e.g. chaining.

### Chaining
We store all elements that have the same hash value into the same **linked list**. Slot j of the hash table is a pointer to the head of the list or `NIL` if there are no such element.

Given a hash table `T` with m slots that stores n elements, we define the load factor as `α = n / m`,  which is the average number of elements stored in a chain.

- Insert: `O(1)` in the worst case.
- Search: `O(1 + α)` In the average case.
- Delete: `O(1)` in the worst case for doubly linked list, and `O(1 + α)` for singly linked list.

Therefore, hash table can support all dictionary operations in `O(1)` on average given that `n = O(m)`.

### Hash functions
#### The division method
`h(k) = k mod m`, with some good m. For example, m should not be in the form of `2^p`, otherwise `h(k)` is just the p lowest-order bits of k. A prime not too close to an exact power of 2 is often a good choice for m, e.g. 701.

#### The multiplication method
First, we multiply the key k by a constant A in the range `0 < A < 1` and extract the fractional part of `kA`. Then we multiply this value by m and take the floor of the result. An advantage of this method is that the value of m is not critical, we typically choose it to be a power of 2 since it can be easily implemented on most computers.