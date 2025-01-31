import { LinkedList } from './lists.js';

const list = new LinkedList();

// Test 1: Append and Prepend
console.log('--- Testing Append/Prepend ---');
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend('dog');
list.prepend('cat');
list.prepend('parrot');
console.log(list.toString()); 
// Expected: ( cat ) -> ( dog ) -> ( parrot ) -> null

// Test 2: Size
console.log('\n--- Testing Size ---');
console.log('Size:', list.size()); 
// Expected: 3

// Test 3: Head and Tail
console.log('\n--- Testing Head/Tail ---');
console.log('Head:', list.head()?.value); // cat
console.log('Tail:', list.tail()?.value); // parrot

// Test 4: At (index access)
console.log('\n--- Testing At ---');
console.log('Index 0:', list.at(0)?.value); // cat
console.log('Index 1:', list.at(1)?.value); // dog
console.log('Index 5:', list.at(5));      // null (out of bounds)

// Test 5: Pop
console.log('\n--- Testing Pop ---');
list.pop();
console.log('After pop:', list.toString()); 
// Expected: ( cat ) -> ( dog ) -> null
console.log('New tail:', list.tail()?.value); // dog

// Test 6: Contains
console.log('\n--- Testing Contains ---');
console.log('Contains "dog":', list.contains('dog')); // true
console.log('Contains "turtle":', list.contains('turtle')); // false

// Test 7: Find
console.log('\n--- Testing Find ---');
console.log('Find "cat":', list.find('cat')); // 0
console.log('Find "dog":', list.find('dog')); // 1
console.log('Find "hamster":', list.find('hamster')); // null

// Test 8: Edge Cases
console.log('\n--- Testing Edge Cases ---');
const emptyList = new LinkedList();
console.log('Empty list size:', emptyList.size()); // 0
console.log('Empty list contains "cat":', emptyList.contains('cat')); // false
emptyList.pop(); // Should do nothing without errors
console.log('Empty list toString:', emptyList.toString()); // null

// Test 9: Full Sequence
console.log('\n--- Full Sequence Test ---');
const fullList = new LinkedList();
fullList.append('a');
fullList.prepend('b');
fullList.append('c');
fullList.prepend('d');
console.log(fullList.toString());
// Expected: ( d ) -> ( b ) -> ( a ) -> ( c ) -> null
console.log('Size:', fullList.size()); // 4
console.log('At(2):', fullList.at(2)?.value); // a
fullList.pop();
console.log('After pop:', fullList.toString()); 
// Expected: ( d ) -> ( b ) -> ( a ) -> null