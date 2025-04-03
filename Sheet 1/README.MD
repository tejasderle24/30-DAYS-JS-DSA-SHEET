# [DSA Sheet] 1. Password Strength Checker - JS

## Easy

### Hints

## Problem Background
You are a cybersecurity engineer at ChaiCode, and you are building an API to evaluate password strength for users signing up on your platform. A strong password is essential to ensure users' accounts are safe from hackers. Your task is to write a function that checks if a given password meets specific strength criteria.

## Problem Statement
You need to implement a function that checks if a given password meets specific strength criteria.

1. The password must be at least 8 characters long.
2. It must contain at least one uppercase letter (A-Z).
3. It must contain at least one lowercase letter (a-z).
4. It must contain at least one digit (0-9).
5. It must contain at least one special character (e.g., !@#$%^&* ).

Return **"Strong"** if the password meets all criteria, otherwise return **"Weak"**.

## Input Format
- A single string:
- `password`: A string of length (1 \leq length \leq 1000), consisting of printable ASCII characters.

## Output Format
A single string:
- **"Strong"** if the password meets all the criteria.
- **"Weak"** otherwise.

## Example
**Input:**
```plaintext
Password123!
```
**Output:**
```plaintext
Strong
```

### Explanation
- The password is at least 8 characters long.
- It contains at least one uppercase letter.
- It contains at least one lowercase letter.
- It contains at least one digit.
- It contains at least one special character.

## Constraints
1. (1 <= length of password <= 1000)
2. Password may contain any printable ASCII character.

## Hint 1
```plaintext
Traverse the string and maintain flags for each criterion (length, uppercase, lowercase, digit, special character).
```

# Solution
```js
function passwordStrengthChecker (password) {
if (password.length < 8) { // Password length must be at least 8 characters
return "Weak";
}
let hasUpper false;
let has Lower false;
let hasDigit = false;
let hasSpecial = false;
for (let i = 0; i < password.length; i++) {
const char password[i];
if (/[A-Z]/.test(char)) {
hasUpper = true;
} else if (/[a-z]/.test(char)) {
has Lower true;
} else if (/\d/.test(char)) {
hasDigit = true;
} else if (/[^a-zA-Z0-9]/.test(char)) { // Checks for any non-alphanumeric character
hasSpecial true;
}
// Check if all the conditions are met
if (hasUpper && hasLower && hasDigit && hasSpecial) {
return "Strong";
} else {
return "Weak";
}
```