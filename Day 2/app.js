function playlistManager(actions) {
  const playlist = [];

  for (const action of actions) {
    if (action.startsWith("addSong(")) {
      // Extract song name from the action string
      const songName = action.match(/addSong\(['"](.+?)['"]\)/)[1];
      playlist.push(songName);
    } else if (action === "undo()" && playlist.length > 0) {
      playlist.pop();
    }
  }

  return playlist;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const actions = JSON.parse(input);

  const result = playlistManager(actions);

  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above

