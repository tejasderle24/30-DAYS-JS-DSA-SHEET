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

// please don't remove the code below
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
