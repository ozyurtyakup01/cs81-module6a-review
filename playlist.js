// default constructor
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}
// push string to songs array
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

// sets currentSong to first element of the array
Playlist.prototype.playFirst = function() {
  //check if array is empty
  if (this.songs.length > 0) {
    //if not empty set current song to first element
    this.currentSong = this.songs[0];
    // print new current song
    console.log("Now playing:", this.currentSong);
  }
};

Playlist.prototype.skipSong = function() {
    //check if there is another element to skip
  if (this.songs.length > 1) {
    // remove first element
    this.songs.shift();
    // currentsong is new first element
    this.currentSong = this.songs[0];
    // print new current song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    // 1 or less element in array, error
    console.log("No more songs to skip.");
  }
};
// getter function
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  // print songs in a single string
  console.log("Songs:", this.songs.join(", "));
};

// test
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();