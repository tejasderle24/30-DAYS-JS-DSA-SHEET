# Manage Real-Time Notifications - JavaScript

## Problem Background
As part of the **SpringFest App**, you're building a **notification management system**. The app sends out notifications to users about events, offers, and updates during the festival. Each notification belongs to a category (like *Event*, *Offer*, *Update*). Your task is to count the notifications received for each category and display the counts in **alphabetical order**.

## Problem Statement
Given a list of notifications where each notification belongs to a category, write a program to count the notifications for each category and output the counts in **alphabetical order** of the categories.

## Input Format
- `notifications`: An **array of strings** where each string represents a notification category.
- **Constraints:**
  - **1 ≤ number of notifications ≤ 10^5**
  - **1 ≤ length of a category ≤ 50**
  - Categories contain only **uppercase and lowercase English letters**.

## Output Format
An **array of objects** where each object contains:
- `category`: The name of the category.
- `count`: The number of notifications for that category.
- The output **must be sorted alphabetically** by the category name.

## Example
### Input:
```json
["Event", "Offer", "Event", "Update", "Offer", "Offer", "Event"]
```

### Output:
```json
[
  {"category": "Event", "count": 3},
  {"category": "Offer", "count": 3},
  {"category": "Update", "count": 1}
]
```

### Explanation
- "Event" appears **3** times.
- "Offer" appears **3** times.
- "Update" appears **1** time.
- Sorted **alphabetically**: *Event*, *Offer*, *Update*.

## Implementation
```js
function countNotifications(notifications) {
  const notificationCount = {};

  // Count occurrences of each category
  for (const category of notifications) {
    notificationCount[category] = (notificationCount[category] || 0) + 1;
  }

  // Convert the object to an array of objects
  const result = Object.keys(notificationCount)
    .sort() // Sort categories alphabetically
    .map(category => ({ category, count: notificationCount[category] }));

  return result;
}
```

## How to Run
### Using Node.js
1. **Save the script** in a file (`notifications.js`).
2. **Run the script** with input:
   ```sh
   node notifications.js
   ```

### With Input from Terminal
```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const notifications = JSON.parse(input.trim());
  const result = countNotifications(notifications);
  process.stdout.write(JSON.stringify(result));
});
```

## Time Complexity Analysis
- **Counting occurrences:** `O(N)`
- **Sorting keys:** `O(M log M)`, where `M` is the number of unique categories
- **Mapping to array:** `O(M)`
- **Total Complexity:** `O(N + M log M)` (Efficient for `N` up to `10^5`)

## Summary
This function efficiently counts and sorts notification categories, ensuring **real-time updates** in the SpringFest App! 🚀

