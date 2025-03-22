// 1. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test reverse string function
function testReverseString() {
    // Get input value from the user
    const input = document.getElementById('reverseInput').value;
    // Call the reverseString function and store the result
    const result = reverseString(input);
    // Display the result to the user
    document.getElementById('reverseResult').innerText = "Reversed String: " + result;
}

// 2. Find the second-largest number in an array
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let first = -Infinity;
    let second = -Infinity;

    // Loop through the array to find the largest and second largest numbers
    for (let num of arr) {
        if (num > first) {
            // Update second largest before updating the largest number
            second = first;
            first = num;
        } else if (num > second && num < first) {
            // Update second largest if the current number is between first and second
            second = num;
        }
    }
    // If the second largest number is still -Infinity, return null (no second largest found)
    return second === -Infinity ? null : second;
}

// Test second largest function
function testSecondLargest() {
    // Get input from the user and convert it into an array of numbers
    const input = document.getElementById('numberArrayInput').value;
    const arr = input.split(',').map(num => parseInt(num.trim()));
    // Call the findSecondLargest function and store the result
    const result = findSecondLargest(arr);
    // Display the result to the user
    document.getElementById('secondLargestResult').innerText = result !== null ? "Second Largest Number: " + result : "No second largest number found.";
}

// 3. Check if a given string is a palindrome
function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test palindrome function
function testPalindrome() {
    // Get input from the user
    const input = document.getElementById('palindromeInput').value;
    // Call the isPalindrome function and store the result
    const result = isPalindrome(input);
    // Display the result to the user
    document.getElementById('palindromeResult').innerText = result ? "The string is a palindrome!" : "The string is not a palindrome.";
}
