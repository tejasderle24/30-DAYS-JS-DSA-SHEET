# 🚦 [DSA Sheet] Problem 7: Optimize Traffic Flow Analytics (JavaScript)

**Difficulty**: Easy  
**Category**: Sliding Window / Array

---

## 🧠 Problem Background

As part of the **Spring Smart City Initiative**, you're developing a system to analyze traffic patterns.  
Traffic flow data is collected at regular intervals for multiple roads. Your task is to identify the **maximum traffic flow** recorded over any **continuous `k` intervals** to detect potential congestion trends.

---

## 🧩 Problem Statement

Given a list of integers representing traffic flow at each interval and an integer `k` representing the window size, write a program to find the **maximum sum of traffic flow** recorded over any `k` consecutive intervals.

---

## 📥 Input Format

- `trafficFlow`: An array of integers representing the traffic flow at each interval.  
  **Constraints**:  
  `1 ≤ trafficFlow.length ≤ 10^5`  
  `0 ≤ trafficFlow[i] ≤ 10^3`

- `k`: An integer representing the size of the window.  
  **Constraint**:  
  `1 ≤ k ≤ trafficFlow.length`

---

## 📤 Output Format

- A single integer representing the **maximum sum** of traffic flow over any `k` consecutive intervals.

---

## 🧪 Example

### Input:
```js
trafficFlow = [10, 20, 30, 40, 50];
k = 3;
```

### Output:
```
120
```

### Explanation:
The sum of each window of size 3 is:
- `[10, 20, 30]` → 60  
- `[20, 30, 40]` → 90  
- `[30, 40, 50]` → **120**

The maximum sum is **120**.

---

## 🔒 Constraints

- `1 ≤ trafficFlow.length ≤ 10^5`
- `0 ≤ trafficFlow[i] ≤ 10^3`
- `1 ≤ k ≤ trafficFlow.length`

---

## 💡 Hint

Use the **Sliding Window Technique** to calculate the sum of `k` elements in O(n) time.

---

## ✅ Sample Code (JavaScript)

```js
function maxTrafficFlow(trafficFlow, k) {
  let n = trafficFlow.length;
  let maxSum = 0;
  let currentSum = 0;

  // Initial window
  for (let i = 0; i < k; i++) {
    currentSum += trafficFlow[i];
  }
  maxSum = currentSum;

  // Slide the window
  for (let i = k; i < n; i++) {
    currentSum = currentSum - trafficFlow[i - k] + trafficFlow[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
console.log(maxTrafficFlow([10, 20, 30, 40, 50], 3)); // Output: 120
```

