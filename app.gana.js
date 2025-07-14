let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();
let userLibrary = [];

const songNameElement = document.querySelector('.current-song h5');
const artistNameElement = document.querySelector('.current-song .subtitle');
const currentSongImage = document.querySelector('.current-song-img');
const playPauseBtnImg = document.querySelector('.play-pause-btn img') || document.querySelector('.controls button:nth-child(2) img');
const prevBtn = document.querySelector('.controls button:nth-child(1)');
const nextBtn = document.querySelector('.controls button:nth-child(3)');
const progressBar = document.querySelector('.progress input[type="range"]');
const currentTimeElement = document.querySelector('.progress span:nth-child(1)');
const durationTimeElement = document.querySelector('.progress span:nth-child(3)');
const playlistContainer = document.querySelector('.playlist');
// const searchInput = document.querySelector('.search-bar input');
const volumeControl = document.querySelector('.volume input[type="range"]');
const addToLibraryBtn = document.getElementById('add-to-library');
const menuBtn = document.querySelector('.menu-button'); 
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main');
const myLibraryLink = document.querySelector('.my-library');



window.onload = () => {
  const userData = sessionStorage.getItem('user');

  if (!userData) {
    // 🚨 No user found, redirect to login
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(userData);
  const nameElem = document.getElementById('profile-name');
  const imgElem = document.getElementById('profile-img');

  if (user.username && nameElem) {
    nameElem.textContent = user.username;
  }

  if (user.profileImage && imgElem) {
    imgElem.src = user.profileImage;
  }
};


myLibraryLink.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
    mainContent.classList.toggle('with-sidebar');
});
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-button");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("visible");
    });
});

function initPlayer() {
  loadSong(currentSongIndex);
  renderPlaylist();
  renderPopular();
  renderArtists();
}

function loadSong(index) {
  const song = songs[index];
  if (!song) return;
  audio.src = song.url;
  songNameElement.innerHTML = `${song.name} <br><div class="subtitle">${song.artist}</div>`;
  currentSongImage.src = song.image;
  progressBar.value = 0;
  currentTimeElement.textContent = "0:00";
  durationTimeElement.textContent = "0:00";
  updatePlaylistHighlight(index);
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseBtnImg.src = "./imag/icon/icons8-circled-play-50.png";
  } else {
    audio.play();
    playPauseBtnImg.src = "./imag/icon/pause-circle.png";
  }
  isPlaying = !isPlaying;
}
const myLibraryBtn = document.getElementById('my-library-btn');

if (myLibraryBtn) {
  myLibraryBtn.addEventListener('click', () => {
    if (userLibrary.length === 0) {
      alert("Your library is empty.");
      return;
    }

    const firstSong = userLibrary[0];
    const indexInSongs = songs.findIndex(s => s.url === firstSong.url);

    if (indexInSongs !== -1) {
      currentSongIndex = indexInSongs;
      loadSong(currentSongIndex);
      audio.play();
      isPlaying = true;
      playPauseBtnImg.src = "./imag/icon/pause-circle.png";
    }

    renderPlaylist();
  });
}
 
// setting page js 


function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtnImg.src = "./imag/icon/pause-circle.png";
}

function playPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtnImg.src = "./imag/icon/pause-circle.png";
}

function updateProgressBar() {
  if (!audio.duration) return;
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progressPercent;
  currentTimeElement.textContent = formatTime(audio.currentTime);
  durationTimeElement.textContent = formatTime(audio.duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60) || 0;
  const seconds = Math.floor(time % 60) || 0;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function seekAudio() {
  if (!audio.duration) return;
  audio.currentTime = (progressBar.value / 100) * audio.duration;
}

function updatePlaylistHighlight(index) {
  const playlistItems = document.querySelectorAll('.playlist-item');
  playlistItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function renderPlaylist() {
  playlistContainer.innerHTML = '';

  if (userLibrary.length === 0) {
    playlistContainer.innerHTML = `<p class="empty-playlist-msg">Your library is empty. Add songs to see them here.</p>`;
    return;
  }

  userLibrary.forEach((song, i) => {
    const listItem = document.createElement('li');
    listItem.className = 'playlist-item';
    listItem.innerHTML = `
      <img src="${song.image}" alt="${song.name}" width="50" height="50">
      <h4>${song.name}<br><div class="subtitle">${song.artist}</div></h4>
      <button><img src="./imag/icon/icons8-circled-play-50.png" alt="Play"></button>
    `;
    listItem.addEventListener('click', () => {
      const index = songs.findIndex(s => s.url === song.url);
      if (index !== -1) {
        currentSongIndex = index;
        loadSong(index);
        audio.play();
        isPlaying = true;
        playPauseBtnImg.src = "./imag/icon/pause-circle.png";
      }
    });
    playlistContainer.appendChild(listItem);
  });
}
document.querySelectorAll('.song-title').forEach(el => {
  const maxLen = 8;
  if (el.textContent.length > maxLen) {
    el.textContent = el.textContent.slice(0, maxLen) + '...';
  }
});

function renderPopular() {
  const container = document.getElementById('popular-songs-list');
  if (!container) return;
  container.innerHTML = '';

  songs.forEach((song, index) => {
    const div = document.createElement('div');
    div.className = 'popular-song';
    div.innerHTML = `
      <img src="${song.image}" alt="${song.name}" width="60" style="cursor: pointer;">
      <div style="cursor: pointer;">
        <h4>${song.name}</h4>
        <p>${song.artist}</p>
        <small>Streams: ${song.streams}</small>
      </div>
    `;

    // Play song when image or text is clicked
    div.querySelector('img').addEventListener('click', () => {
      currentSongIndex = index;
      loadSong(index);
      audio.play();
      isPlaying = true;
      playPauseBtnImg.src = "./imag/icon/pause-circle.png";
    });

    div.querySelector('div').addEventListener('click', () => {
      currentSongIndex = index;
      loadSong(index);
      audio.play();
      isPlaying = true;
      playPauseBtnImg.src = "./imag/icon/pause-circle.png";
    });

    container.appendChild(div);
  });
}


function renderArtists() {
  const container = document.getElementById('artist-list');
  if (!container) return;
  container.innerHTML = '';

  const artistSet = new Set();
  songs.forEach(song => artistSet.add(song.artist));

  artistSet.forEach(artist => {
    const div = document.createElement('div');
    div.className = 'artist-item';
    div.innerHTML = `
      <img src="./imag/artists/${artist.toLowerCase().replace(/ /g, '_')}.jpg" alt="${artist}" width="60" style="cursor: pointer;">
      <p style="cursor: pointer;">${artist}</p>
    `;

    // Event listener to filter and play artist's songs
    div.addEventListener('click', () => {
      const artistSongs = songs.filter(song => song.artist === artist);
      if (artistSongs.length > 0) {
        const firstSong = artistSongs[0];
        currentSongIndex = songs.findIndex(s => s.url === firstSong.url);
        loadSong(currentSongIndex);
        audio.play();
        isPlaying = true;
        playPauseBtnImg.src = "./imag/icon/pause-circle.png";

        // Update userLibrary to show only this artist's songs
        userLibrary = artistSongs;
        renderPlaylist();
      }
    });

    container.appendChild(div);
  });
}

const infoPlayBtn = document.getElementById('info-play-btn');

if (infoPlayBtn) {
  infoPlayBtn.addEventListener('click', () => {
    if (userLibrary.length === 0) return;

    // Get first song in userLibrary
    const topSong = userLibrary[0];
    const indexInSongs = songs.findIndex(s => s.url === topSong.url);

    if (indexInSongs !== -1) {
      currentSongIndex = indexInSongs;
      loadSong(currentSongIndex);
      audio.play();
      isPlaying = true;
      playPauseBtnImg.src = "./imag/icon/pause-circle.png";
    }
  });
}

// ADD TO LIBRARY BUTTON FUNCTIONALITY
if (addToLibraryBtn) {
  addToLibraryBtn.addEventListener('click', () => {
    const song = songs[currentSongIndex];
    const alreadyAdded = userLibrary.some(item => item.url === song.url);
    if (!alreadyAdded) {
      userLibrary.push(song);
      renderPlaylist();
    }
  });
}

const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions');

function searchMusic() {
  const searchText = searchInput.value.toLowerCase();
  const playlistItems = document.querySelectorAll('.playlist-item');
  playlistItems.forEach((item, i) => {
    const songTitle = songs[i]?.name.toLowerCase() || '';
    item.style.display = songTitle.includes(searchText) ? "flex" : "none";
  });
}

function playSongByName(songName) {
  const index = songs.findIndex(song => song.name.toLowerCase() === songName.toLowerCase());
  if (index !== -1) {
    currentSongIndex = index;
    loadSong(index);
    audio.play();
    isPlaying = true;
    playPauseBtnImg.src = "./imag/icon/pause-circle.png";
  }
}

// Show suggestions as user types
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = '';

  searchMusic(); // Filter playlist items

  if (!searchText) {
    suggestionsBox.style.display = 'none';
    return;
  }

  const matches = songs
    .filter(song => song.name.toLowerCase().includes(searchText))
    .slice(0, 5); // limit to top 5 suggestions

  if (matches.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }

  suggestionsBox.style.display = 'block';

  matches.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song.name;
    li.onclick = () => {
      searchInput.value = song.name;
      suggestionsBox.innerHTML = '';
      suggestionsBox.style.display = 'none';
      playSongByName(song.name);
    };
    suggestionsBox.appendChild(li);
  });
});

// Play song on Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const enteredText = searchInput.value.trim().toLowerCase();
    const matchIndex = songs.findIndex(song => song.name.toLowerCase() === enteredText);

    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';

    if (matchIndex !== -1) {
      currentSongIndex = matchIndex;
      loadSong(matchIndex);
      audio.play();
      isPlaying = true;
      playPauseBtnImg.src = "./imag/icon/pause-circle.png";
    } else {
      alert("Song not found.");
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("userSettings");
  if (saved) {
    const settings = JSON.parse(saved);

    // Apply profile name & image
    const nameElem = document.getElementById("profile-name");
    const imgElem = document.getElementById("profile-img");

    if (nameElem) nameElem.textContent = settings.name || "Guest";
    if (imgElem) imgElem.src = settings.image || "./imag/profile.jpg";

    // Apply theme
    document.body.className = "";
    document.body.classList.add(settings.theme || "light");
  }

  // Your existing initPlayer() and logic...
  initPlayer();
});

// EVENTS
if (playPauseBtnImg) playPauseBtnImg.parentElement.addEventListener('click', togglePlayPause);
if (nextBtn) nextBtn.addEventListener('click', playNext);
if (prevBtn) prevBtn.addEventListener('click', playPrev);
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', playNext);
if (progressBar) progressBar.addEventListener('input', seekAudio);
if (searchInput) searchInput.addEventListener('input', searchMusic);

// INIT
window.addEventListener('DOMContentLoaded', () => {
  initPlayer();
}); 