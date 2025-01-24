// Initialize variables
let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

// Define songs (you can add more songs with URLs and images)
const songs = [
  { name: "Om Namah Shivay", artist: "Shivay", url: "./imag/icon/om-namah-shivaya-song-229613.mp3", image: "./imag/icon/om name shivay.jpeg" },
  { name: "Blinding Lights", artist: "The Weeknd", url: "song2.mp3", image: "song2.jpg" },
  { name: "Levitating", artist: "Dua Lipa", url: "song3.mp3", image: "song3.jpg" },
  { name: "Shape of You", artist: "Ed Sheeran", url: "song4.mp3", image: "song4.jpg" }
];

// Popular Songs
const popularSongs = [
  { title: "Om Namah Shivay", artist: "Shivay", url: "./imag/icon/om-namah-shivaya-song-229613.mp3", image: "./imag/icon/om name shivay.jpeg" },
  { title: "Blinding Lights", artist: "The Weeknd", url: "song2.mp3", image: "song2.jpg" },
  { title: "Levitating", artist: "Dua Lipa", url: "song3.mp3", image: "song3.jpg" },
  { title: "Shape of You", artist: "Ed Sheeran", url: "song4.mp3", image: "song4.jpg" }
];

// Artists
const artists = [
  { name: "The Weeknd", img: "./imag/icon/om name shivay.jpeg" },
  { name: "Dua Lipa", img: "artist2.jpg" },
  { name: "Ed Sheeran", img: "artist3.jpg" },
  { name: "Justin Bieber", img: "artist4.jpg" }
];

// Select elements
const playPauseBtn = document.querySelector('.controls button:nth-child(2) img');
const prevBtn = document.querySelector('.controls button:nth-child(1)');
const nextBtn = document.querySelector('.controls button:nth-child(3)');
const songNameElement = document.querySelector('.current-song h5');
const artistNameElement = document.querySelector('.current-song .subtitle');
const progressBar = document.querySelector('.progress input[type="range"]');
const currentTimeElement = document.querySelector('.progress span:nth-child(1)');
const durationTimeElement = document.querySelector('.progress span:nth-child(3)');
const playlistContainer = document.querySelector('.playlist');
const currentSongImage = document.querySelector('.current-song-img');
const popularSongsList = document.getElementById("popular-songs-list");
const artistList = document.getElementById("artist-list");
const volumeControl = document.querySelector('.volume input');
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

// Load the current song
function loadSong(index) {
  const song = songs[index];
  audio.src = song.url;
  songNameElement.textContent = song.name;
  artistNameElement.textContent = song.artist;
  currentSongImage.src = song.image;
  progressBar.value = 0;
  currentTimeElement.textContent = "0:00";
  durationTimeElement.textContent = "0:00";
  updatePlaylistHighlight(index);
}

// Play or pause the song
function togglePlayPause() {
  if (isPlaying) {
      audio.pause();
      playPauseBtn.src = "./imag/icon/icons8-circled-play-50.png";
  } else {
      audio.play();
      playPauseBtn.src = "./imag/icon/pause-circle.png";
  }
  isPlaying = !isPlaying;
}

// Play the next song
function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtn.src = "./imag/icon/pause-circle.png";
}

// Play the previous song
function playPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtn.src = "./imag/icon/pause-circle.png";
}

// Update the progress bar
function updateProgressBar() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progressPercent || 0;
  currentTimeElement.textContent = formatTime(audio.currentTime);
  durationTimeElement.textContent = formatTime(audio.duration || 0);
}

// Seek the audio when progress bar changes
function seekAudio() {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
}

// Format time (mm:ss)
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Highlight the currently playing song in the playlist
function updatePlaylistHighlight(index) {
  const playlistItems = document.querySelectorAll('.playlist-item');
  playlistItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
  });
}

// Render playlist
function renderPlaylist() {
  songs.forEach((song, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'playlist-item';
      listItem.innerHTML = `
          <img src="${song.image}" alt="${song.name}">
          <h4>${song.name}<br><div class="subtital">${song.artist}</div></h4>
          <button>
              <img src="./imag/icon/icons8-circled-play-50.png" alt="Play">
          </button>
      `;

      listItem.addEventListener('click', () => {
          currentSongIndex = index;
          loadSong(index);
          audio.play();
          isPlaying = true;
          playPauseBtn.src = "./imag/icon/pause-circle.png";
      });
      playlistContainer.appendChild(listItem);
  });
}

// Populate Popular Songs
popularSongs.forEach((song, index) => {
  const songItem = document.createElement("div");
  songItem.className = 'popular-songs';
  songItem.innerHTML = `<img src="${song.image}" alt="${song.title}">
                        <h4>${song.title}<br><div class="subtital">${song.artist}</div></h4>`;
  songItem.addEventListener('click', () => {
    currentSongIndex = index;  // Fix: add the index here
    loadSong(index);
    audio.play();
    isPlaying = true;
    playPauseBtn.src = "./imag/icon/pause-circle.png";
  });
  popularSongsList.appendChild(songItem);
});


// Populate Artists
artists.forEach((artist) => {
  const artistCard = document.createElement("div");
  artistCard.classList.add("artist-card");

  const artistImg = document.createElement("img");
  artistImg.src = artist.img;
  artistImg.alt = artist.name;

  const artistName = document.createElement("p");
  artistName.textContent = artist.name;

  artistCard.appendChild(artistImg);
  artistCard.appendChild(artistName);
  artistList.appendChild(artistCard);
});
const range = document.querySelector('.footer .progress input[type="range"]');
range.addEventListener('input', (e) => {
    const value = e.target.value;
    e.target.style.background = `linear-gradient(to right, #ff5722 0%, #ff5722 ${value}%, #ccc ${value}%, #ccc 100%)`;
});


// Initialize the app
renderPlaylist();
loadSong(currentSongIndex);

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', playNext);
progressBar.addEventListener('input', seekAudio);
audio.addEventListener('error', () => {
  alert("Error loading audio file. Please check the URL.");
});

// Volume Control
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value / 100;
});
