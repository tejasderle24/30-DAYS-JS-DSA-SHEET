function processQueries(n, marbles, queries) {
    // Step 1: Build prefix sum array
    let prefix = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + marbles[i - 1];
    }

    // Step 2: Answer each query in O(1) time
    for (let [l, r] of queries) {
        console.log(prefix[r] - prefix[l - 1]);
    }
}
/*
// Please don't remove the code below
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputLines = [];
rl.on('line', function (line) {
    inputLines.push(line.trim());
});

rl.on('close', function () {
    const [n, q] = inputLines[0].split(' ').map(Number);
    const marbles = inputLines[1].split(' ').map(Number);
    const queries = inputLines.slice(2).map(line => line.split(' ').map(Number));

    processQueries(n, marbles, queries);
});*/



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
  process.stdout.write(results.join('\n')); 
});