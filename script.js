// 1. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test reverse string function
function testReverseString() {
    const input = document.getElementById('reverseInput').value;
    const result = reverseString(input);
    document.getElementById('reverseResult').innerText = "Reversed String: " + result;
}

// 2. Find the second-largest number in an array
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

// Test second largest function
function testSecondLargest() {
    const input = document.getElementById('numberArrayInput').value;
    const arr = input.split(',').map(num => parseInt(num.trim()));
    const result = findSecondLargest(arr);
    document.getElementById('secondLargestResult').innerText = result !== null ? "Second Largest Number: " + result : "No second largest number found.";
}

// 3. Check if a given string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test palindrome function
function testPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const result = isPalindrome(input);
    document.getElementById('palindromeResult').innerText = result ? "The string is a palindrome!" : "The string is not a palindrome.";
}
