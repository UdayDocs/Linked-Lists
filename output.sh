--- Testing Append/Prepend ---
( cat ) -> ( dog ) -> ( parrot ) -> null

--- Testing Size ---
Size: 3

--- Testing Head/Tail ---
Head: cat
Tail: parrot

--- Testing At ---
Index 0: cat
Index 1: dog
Index 5: null

--- Testing Pop ---
After pop: ( cat ) -> ( dog ) -> null
New tail: dog

--- Testing Contains ---
Contains "dog": true
Contains "turtle": false

--- Testing Find ---
Find "cat": 0
Find "dog": 1
Find "hamster": null

--- Testing Edge Cases ---
Empty list size: 0
Empty list contains "cat": false
Empty list toString: null

--- Full Sequence Test ---
( d ) -> ( b ) -> ( a ) -> ( c ) -> null
Size: 4
At(2): a
After pop: ( d ) -> ( b ) -> ( a ) -> null