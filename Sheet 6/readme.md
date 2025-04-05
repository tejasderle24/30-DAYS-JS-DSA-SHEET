

---

# 🦑 [DSA Sheet] Problem 6: Squid Game's Marble Challenge (JavaScript)

**Difficulty**: Medium  
**Category**: Prefix Sum / Range Query Optimization

---

## 🧩 Problem Statement

In the Squid Game's infamous marble challenge, players are asked to gamble their marbles by placing them into different pits. Each pit contains a certain number of marbles, and a player can only take marbles from a **contiguous range** of pits in one move.

Your task is to determine the **total number of marbles in a given range** of pits, and you must answer multiple such queries efficiently.

---

## 📥 Input Format

- The first line contains two integers `n` and `q`:
  - `n`: Number of pits.
  - `q`: Number of queries.

- The second line contains `n` integers, where each integer represents the number of marbles in each pit.

- The next `q` lines each contain two integers `l` and `r` (1-based index), representing the range of pits (inclusive).

---

## 📤 Output Format

- For each query, print a single integer — the **total number of marbles** in the specified range of pits.

---

## 🧪 Example

### Input:
```
5 3
1 2 3 4 5
1 3
2 5
1 5
```

### Output:
```
6
14
15
```

### Explanation:
- Query `[1, 3]` → 1 + 2 + 3 = **6**
- Query `[2, 5]` → 2 + 3 + 4 + 5 = **14**
- Query `[1, 5]` → 1 + 2 + 3 + 4 + 5 = **15**

---

## 🔒 Constraints

- `1 <= n, q <= 10^5`
- `1 <= marbles[i] <= 10^3`
- `1 <= l <= r <= n`

---

## 💡 Hint

Use **prefix sums** to answer each query in **O(1)** time after an **O(n)** preprocessing step.

---

## ✅ Sample Code (JavaScript)

```js
function processQueries(n, marbles, queries) {
  let prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + marbles[i - 1];
  }

  let results = [];
  for (let [l, r] of queries) {
    results.push(prefix[r] - prefix[l - 1]);
  }

  return results;
}

// please don't remove the code below
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const [n, q] = input[0].split(' ').map(Number);
  const marbles = input[1].split(' ').map(Number);
  const queries = input.slice(2).map((query) => query.split(' ').map(Number));

  const results = processQueries(n, marbles, queries);
  process.stdout.write(results.join('\n') + '\n');
});
```

---