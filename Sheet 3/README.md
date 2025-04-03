# Train Seating Arrangement - JavaScript

## Problem Background
Sherlock Holmes is once again faced with a perplexing mystery!
In a secret communication channel, a series of encrypted messages has been intercepted. Every message appears exactly **twice**, except for one unique message, the **Lone Survivor**.

This mysterious message holds the key to solving the case, but time is of the essence!
Sherlock has tasked you, his trusted assistant, to decode the list and uncover the **unique message** that appears only once.

However, there's a challenge:
1. The solution **must be fast** (linear runtime complexity).
2. You can only use **constant extra space** (to ensure the secrecy of the operation).

Can you crack the case and find the **Lone Survivor** before it's too late?

---

## Problem Statement
Given a **non-empty array** of integers, `nums`, where **every element appears exactly twice** except for **one unique element**, find the **unique element**.

To crack the code, your solution must:
- Run in **O(n) time complexity**.
- Use only **O(1) extra space**.

---

## Input Format
- A **single array** of integers, `nums`, where every element appears twice **except for one unique element**.

## Output Format
- A **single integer** - the unique element in the array.

---

## Constraints
1. `1 ≤ nums.length ≤ 3 × 10^4`
2. `-3 × 10^4 ≤ nums[i] ≤ 3 × 10^4`
3. Each element in the array appears **exactly twice**, except for one element which appears **only once**.

---

## Example
### Input:
```json
[4, 1, 2, 1, 2]
```

### Output:
```json
4
```

### Explanation:
- `1` appears **twice**.
- `2` appears **twice**.
- `4` appears **once** (unique element).

---

## Solution Implementation
We use **Bitwise XOR (`^`)** to solve the problem efficiently:
- **XOR properties:**
  - `a ^ a = 0` (same numbers cancel each other out)
  - `a ^ 0 = a` (XOR with zero keeps the number unchanged)
- Since all elements except one appear **twice**, XOR-ing all numbers will cancel out the duplicates, leaving only the unique number.

### Code Implementation
```js
function findUniqueNumber(nums) {
  let unique = 0;

  for (const num of nums) {
    unique ^= num; // XOR all numbers
  }

  return unique;
}
```

### How It Works
1. Initialize `unique` as **0**.
2. Loop through each number in `nums` and apply **XOR (`^=`)**.
3. Duplicate numbers cancel each other out, leaving the unique number.

---

## Full Solution with Input Handling
```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const nums = JSON.parse(input.trim()); // Parse the input array
  const result = findUniqueNumber(nums); // Call the function
  process.stdout.write(result.toString()); // Output the unique number
});
```

---

## Time Complexity Analysis
- **Loop through `nums` once → O(N)`**
- **Only one variable (`unique`) → O(1) space**
- **Total Complexity:** `O(N)` time and `O(1)` space 🚀

---

## Summary
This approach provides an efficient and optimized way to find the unique number using **XOR**, maintaining **linear runtime** and **constant space complexity**. 🕵️‍♂️🔎

