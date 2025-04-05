// you just need to implement the maxTrafficFlow function only
function maxTrafficFlow(trafficFlow, k) {
    if (trafficFlow.length < k) return 0;
  
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
      windowSum += trafficFlow[i];
    }
  
    let maxSum = windowSum;
  
    for (let i = k; i < trafficFlow.length; i++) {
      windowSum = windowSum - trafficFlow[i - k] + trafficFlow[i];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  // Parsing commands from stdin
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const [trafficFlow, k] = JSON.parse(input.trim());
    const result = maxTrafficFlow(trafficFlow, k);
    process.stdout.write(result.toString());
  });
  