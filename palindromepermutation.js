//Objective is to see whether any permutation of a string is a palindrome

let s = 'aab'


//O(n) solutoin where n is the length of the string
//We use a hashmap to keep track of frequencies
//For a permutation to exist, only one character can have an odd frequency

let map = {}
    
for (let char of s) {
    if (map[char] == undefined) {
        map[char] = 1
    } else {
        map[char]++
    }
}

let oddCount = 0

for (let value of Object.values(map)) {
    if (value % 2 != 0) {
        oddCount++
    }
}

//We can only have at most one odd frequency
return oddCount <= 1